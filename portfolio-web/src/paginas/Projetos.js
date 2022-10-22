import React from "react";
import Header from "../componentes/Header";
import FrontendImage from '../imagens/frontend-online-store-image.png';
import TryunfoImage from '../imagens/tryunfo-image.png';
import CardProjetos from "./cardProjetos";
import TrybeWalletImage from '../imagens/imagem-trybewallet.png';
import TriviaGame from '../imagens/trivia-game.png';

import './Projetos.css';

export default function Projetos() {
  const projetos = [
    { 
      url: 'https://frontend-online-store-hektho.vercel.app/', 
      name: 'Frontend Online Store', 
      img: FrontendImage,
      detalhes: {
        descricao: 'Projeto que simula uma loja de compra de produtos online. ',
        github: 'https://github.com/hektho/Frontend-Online-Store',
      }
    },
    { 
      url: 'https://tryunfo-hektho.vercel.app/', 
      name: 'Tryunfo', 
      img: TryunfoImage, 
      detalhes: {
        descricao: 'Projeto que consiste na criação de cartas do famoso jogo "Super Trunfo" e salvá-las no baralho.',
        github: 'https://github.com/hektho/Tryunfo',
      } 
    },
    {
      url: 'https://trybe-wallet-hektho.vercel.app/',
      name: 'TrybeWallet',
      img: TrybeWalletImage,
      detalhes: {
        descricao: 'Projeto que simula uma carteira de controle de gastos com conversor de moedas.',
        github: 'https://github.com/hektho/TrybeWallet'
      }
    },
    {
      url: 'https://trivia-project-hektho.vercel.app/',
      name: 'Trivia Game',
      img: TriviaGame,
      detalhes: {
        descricao: 'Um jogo de perguntas e respostas. ',
        github: 'https://github.com/hektho/Trivia',
      },
    }
  ];

  return (
    <div className="div-main-container-projetos">
      <Header />
      <section className="main-projetos">
        {projetos.map(({ url, name, img, detalhes }) => (
          <CardProjetos img={ img } url={ url } name={ name } detalhes={ detalhes } />
        ))}
      </section>

    </div>
  );
}