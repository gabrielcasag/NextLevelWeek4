import Head from "next/head";
import { GetServerSideProps } from "next";

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from '../styles/components/Home.module.css';
import { ChallengesProvider } from "../contexts/ChallengeContext";

interface HomeProps {
  level: number;
  currentExp: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {

  return (
    <ChallengesProvider 
      level={props.level}
      currentExp={props.currentExp}
      challengesCompleted={props.challengesCompleted}
      >
      <div className={styles.container}>  
        <Head>
          <title>Inicio | Move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>  
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => { 
  
  const { level, currentExp, challengesCompleted } = ctx.req.cookies;
  
  return {
    props: {
      level: Number(level),
      currentExp: Number(currentExp),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

//o next eh hibrido
//podemos ter nosso back-end em c# por exemplo
//entao teremos 3 camadas
//  camada back-end (c#) - server side
//  a camada do next (node.js) - tmb eh um servidor (back-end)
//  a camada front-end (react) - client side
//quando acessamos uma pagina 
//primeiro chegamos na camada do next q esta controlando o app do front
//a camada do front constroi a interface consumindo o back-end
// o getServerSideProps controla o q é passado da camada node pro front
// podemos acessar a api, os cookies
// retorna para o componente pronto
// executando na camada do server node