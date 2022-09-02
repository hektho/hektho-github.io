import React from "react";
import Header from "../componentes/Header";
import FrontendImage from '../imagens/frontend-online-store-image.png';
import TryunfoImage from '../imagens/tryunfo-image.png';
import CardProjetos from "./cardProjetos";

import './Projetos.css';

export default function Projetos() {
  const projetos = [
    { url: 'https://frontend-online-store-hektho.vercel.app/', 
      name: 'Frontend Online Store', 
      img: FrontendImage,
      detalhes: {
        descricao: 'Projeto que simula uma loja de compra de produtos online. ',
        github: 'https://github.com/hektho/Frontend-Online-Store',
      }
    },
    { url: 'https://tryunfo-hektho.vercel.app/', 
      name: 'Tryunfo', 
      img: TryunfoImage, 
      detalhes: {
        descricao: 'Projeto que consiste na criação de cartas do famoso jogo "Super Trunfo" e salvá-las no baralho.',
        github: 'https://github.com/hektho/Tryunfo',
    }}
  ]
  return (
    <div>
      <Header />
      <section className="main-projetos">
        {projetos.map(({ url, name, img, detalhes }) => (
          <CardProjetos img={ img } url={ url } name={ name } detalhes={ detalhes } />
        ))}
      </section>

    </div>
  );
}