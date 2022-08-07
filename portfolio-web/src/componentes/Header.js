import React from "react";
import './Header.css';
import homeIcon from './icones/casa.png';
import skillsIcon from './icones/habilidades.png';
import projectsIcon from './icones/projeto.png';
import contactIcon from './icones/contato-telefonico.png';
import aboutMeIcon from './icones/sobre-mim.png';
function Header() {
  return (
    <header className=" header bg-sky-300 max-h-18 items-center" >
      <nav className="flex items-center w-full text-sky-50">
        <ul className="flex flex-row w-screen items-center justify-center font-mono text-lg font-semibold">
          <li>
            <img src={ homeIcon } alt='ícone da página home' width='30px' height='20px'/>
            Home
          </li>
          <li>
            <img src={ aboutMeIcon } alt='ícone da página home' width='30px' height='20px'/>
            Sobre mim
          </li>
          <li>
            <img src={ projectsIcon } alt='ícone da página home' width='30px' height='20px'/>
            Projetos
          </li>
          <li>
            <img src={ skillsIcon } alt='ícone da página home' width='30px' height='20px'/>
            <span>Habilidades</span>
          </li>
          <li>
            <img src={ contactIcon } alt='ícone da página home' width='30px' height='20px'/>
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;