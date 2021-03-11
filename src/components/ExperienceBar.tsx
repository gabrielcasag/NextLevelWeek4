import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExp, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round((currentExp * 100) / experienceToNextLevel);

  return (
    <header className={styles.experienceBar}>
      <span>0 XP</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span className={styles.currentExp} style={{ left: `${percentToNextLevel}%` }}>
          {currentExp} XP
        </span>
      </div>
      <span>{experienceToNextLevel} XP</span>
    </header>
  )
}