## Sobre o projeto

Este é um projeto [Next.js](https://nextjs.org/) criado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) e desenvolvido durante a NextLevelWeek#4 disponibilizada pela @Rocketseat.

A ideia do aplicativo se basea na técnica de [pomodoro](https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro), que consiste em focar em uma atividade por um intervalo de tempo (geralmente 25min) e após isso desfocar por um período mais curto (geralmente 5min). 

Para isso o aplicativo conta com um timer que pode ser ativado e com isso um ciclo se inicia, onde o usuário deverá realizar a sua tarefa planejada com foco máximo. 
Após iniciado um ciclo, o usuário pode abandonar o mesmo caso tenha perdido o foco na tarefa, porém o timer irá resetar e será necessário se preparar para um novo ciclo.
Chegado ao fim de um ciclo (25min) o aplicativo irá emitir uma notificação ao usuário (se o mesmo tiver permitido) e lançará um desafio em forma de exercício.
Se o usuário completar o desafio lançado ele deve clicar no botão "Completei" computando experiência para seu perfil, podendo subir de nível.

## Rodando o ambiente de desenvolvimento

Para rodar o ambiente de desenvolvimento no seu local utilize o comando que convém para você!
Nesse projeto foi utilizado o yarn como gerenciador de pacotes

```bash
npm run dev
# OU
yarn dev
```

## Rodando o ambiente de produção

Para gerar uma release(build) do app e verificar localmente como se estivesse no ambiente de produção utilize:

```bash
npm run build
# OU
yarn build
```
e depois

```bash
npm run start
# OU
yarn start
```

## Visualizando a aplicação

Abra o seu [localhost:3000](http://localhost:3000/) e veja o resultado.
Se tudo correu bem, a aplicação aparecerá para você assim como veremos nas imagens abaixo.. 😁

## Imagens da aplicação

![image](https://user-images.githubusercontent.com/52332643/112731029-a6c4d480-8f13-11eb-9986-484c2bc9c602.png)


## Aprenda mais

Para aprender mais sobre as tecnologias utilizadas nessa aplicação recomenda-se as seguintes referências:

- [Next.js Docs](https://nextjs.org/docs) 
- [Aprenda Next.js](https://nextjs.org/learn)
- [Rocketseat](https://app.rocketseat.com.br/)
- [Next.js Deploy](https://nextjs.org/docs/deployment)

## Publicado em produção pela Vercel

[https://moveit-gbrl.vercel.app/](https://moveit-gbrl.vercel.app/)
