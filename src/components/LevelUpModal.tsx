import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";

import styles from "../styles/components/LevelUpModal.module.css";

export default function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns !!!</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal"/>
        </button>
      </div>
    </div>
  )
}