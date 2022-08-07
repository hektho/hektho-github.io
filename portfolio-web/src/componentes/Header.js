import React from "react";
import './Header.css';
import homeIcon from './icones/casa.png';
import skillsIcon from './icones/habilidades.png';
import projectsIcon from './icones/projeto.png';
import contactIcon from './icones/contato-telefonico.png';
import aboutMeIcon from './icones/sobre-mim.png';
import { Link } from "react-router-dom";

function Header({ history }) {
  
  return (
    <header className=" header max-h-18 items-center" >
      <nav className="flex items-center justify-center w-full text-sky-50">
        <ul className="flex flex-row w-screen items-center justify-center font-mono text-lg font-semibold ul-container">
          <Link to='/home' className="border-none lista">
            <img src={ homeIcon } class='icone' alt='ícone da página home' width='30px' height='20px'/>
            Home
          </Link>
          <Link to='/sobre-mim' className='lista'>
            <img src={ aboutMeIcon } class='icone' alt='ícone da página home' width='30px' height='20px'/>
            Sobre mim
          </Link>
          <Link to='/projetos' className='lista'>
            <img src={ projectsIcon } class='icone' alt='ícone da página home' width='30px' height='20px'/>
            Projetos
          </Link>
          <Link to='habilidades' className='lista'>
            <img src={ skillsIcon } class='icone' alt='ícone da página home' width='30px' height='20px'/>
            <span>Habilidades</span>
          </Link>
          <Link to='contatos' className='lista'>
            <img src={ contactIcon } class='icone' alt='ícone da página home' width='30px' height='20px'/>
            Contato
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;