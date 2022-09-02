import React from "react";
import './cardProjetos.css';

export default function cardProjetos({ img, name, url, detalhes }) {
  console.log(detalhes);
  return (
    <div className="main-card-projetos">
      <a href={ url } target='_blank' rel='noreferrer'>
        <img className='img-card' src={ img } alt={`Imagem do projeto: ${name}`} />
      </a>
        <div className="description-card">
          <span className="name-project"> { name } </span>
          <p>
            {detalhes.descricao}
            Mais informações no 
            <a href={ detalhes.github } target='_blank' rel="noreferrer"> 
              {' '}
              <strong> ReadMe </strong>
              {' '}
            </a>
            do projeto.
          </p>
        </div>
    </div>
  )
}