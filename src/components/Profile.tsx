import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  let { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/gabrielcasag.png" alt="Gabriel" />
      <div>
        <strong>Gabriel Casagrande</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level { level }
        </p>
      </div>
    </div>
  )
}