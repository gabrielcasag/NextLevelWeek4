import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from 'js-cookie';

import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExp: number;
  challengesCompleted: number;
  activeChallenge: Challenge; 
  experienceToNextLevel: number;
  startNewChallenge: () => void;
  levelUp: () => void;
  resetChallenge: () => void;  
  completeChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExp: number;
  challengesCompleted: number;
}

//cria o contexto
export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExp, setCurrentExp] = useState(rest.currentExp ?? 0);
  const [challengesCompleted, setChallengesCompeted] = useState(rest.challengesCompleted ?? 0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []); 
  //qnd o array de dep eh vazio executa uma unica vez qnd o compomente for exibido

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExp", String(currentExp));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentExp, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
  }

  function challengeUp() {
    setChallengesCompeted(challengesCompleted + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();
    
    if (Notification.permission === 'granted') {
      new Notification("Novo desafio no pedaço 🚀", {
        body: `Ta valendo ${challenge.amount} XP!!`
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }
    
    const { amount } = activeChallenge;
    let newXp = currentExp + amount;

    if ( newXp >= experienceToNextLevel ) { 
      newXp = newXp - experienceToNextLevel;
      levelUp();
    }

    setCurrentExp(newXp);
    setActiveChallenge(null);
    challengeUp();
  }

  return (
    <ChallengesContext.Provider 
      value={{ 
        level, 
        levelUp, 
        currentExp, 
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
