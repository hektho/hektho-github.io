import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="p-4 bg-gradient-to-r from-indigo-500" >
      <nav className="flex justify-between items-center w-full text-sky-50">
        <h1 className="flex w-3/6 justify-center text-4xl font-medium">
          Heitor da Costa 
        </h1>
        <ul className="flex flex-row w-3/4 justify-around p-3 font-mono text-lg font-semibold">
          <li>
            Home
          </li>
          <li>
            Sobre mim
          </li>
          <li>
            Projetos
          </li>
          <li>
            Habilidades
          </li>
          <li>
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;