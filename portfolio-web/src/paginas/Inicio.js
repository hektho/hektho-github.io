import React from "react";
import './Inicio.css';

export default function Inicio(props) {

  const { history } = props;
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen inicio-background">
      <h1 className="text-4xl text-white greetings p-1 flex-nowrap">
        Olá, meu nome é Heitor da Costa!
      </h1>
      <button 
        onClick={ () => history.push('/home') }
        type="button" 
        className="p-2 text-2xl text-white mt-80 botao"
      >
        Começar
      </button>
    </div>
    
  );
}