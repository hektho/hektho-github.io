import React, { useEffect } from "react";
import './Inicio.css';

export default function Inicio(props) {

  const { history } = props;
  const randomColors = () => {
    let hexCode = '#';
    let codes = [];
    const caracteres = '0123456789ABCDEF';
    for (let i2 = 0; i2 < 3; i2 += 1) {
      hexCode = '#';
      for (let i = 0; i < 6; i += 1) {
        const randomNum = Math.floor(Math.random() * caracteres.length);
        hexCode += caracteres[randomNum];
      }
      codes.push(hexCode);
    }
    const inicioBackground = document.querySelector('.inicio-background');
    inicioBackground.style.background = `linear-gradient(45deg, ${codes[0]}, ${codes[1]}, ${codes[2]})`;
    inicioBackground.style.backgroundSize = '400% 400%';
  }

  useEffect(() => {
    randomColors();
  })
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen inicio-background">
      <h1 className="text-4xl text-white greetings p-2 flex-nowrap">
        Olá, meu nome é Heitor da Costa!
      </h1>
      <button 
        onClick={ () => history.push('/sobre-mim') }
        type="button" 
        className="p-2 text-2xl text-white mt-80 botao"
      >
        Começar
      </button>
    </div>
    
  );
}