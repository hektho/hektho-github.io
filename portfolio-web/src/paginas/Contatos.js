import React from "react";
import CardRedesSociais from "../componentes/CardRedesSociais";
import Header from "../componentes/Header";
import githubIcon from '../icones/github.png';
import linkedinIcon from '../icones/linkedin.png';
import emailIcon from '../icones/o-email.png';

export default function Contatos() {
  const iconesRedesSociais = [
  { icone: githubIcon, nome: 'Github', link: 'https://github.com/hektho' }, 
  { icone: linkedinIcon, nome: 'LinkedIn', link: 'https://www.linkedin.com/in/heitor-candido/' }, 
  { icone: emailIcon, nome: 'E-mail'}];

  return (
    <div>
      <Header />
      <h1 className="text-xl static m-12">
        Clique em um dos cards para acessar a rede social ou copiar o endereço de e-mail
      </h1>
      <section className="flex w-screen h-screen justify-center  fixed">
        
        { iconesRedesSociais.map((i) => (
            <CardRedesSociais nome={ i.nome } icone={ i.icone } link={i.link && i.link} />
        ))}
      </section>
    </div>
  );
}