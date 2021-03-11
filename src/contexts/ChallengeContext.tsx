import challenges from '../../challenges.json';

import { createContext, ReactNode, useState } from "react";

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
}

//cria o contexto
export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }:ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExp, setCurrentExp] = useState(0);
  const [challengesCompleted, setChallengesCompeted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

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
