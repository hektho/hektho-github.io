import React from 'react'
import './CardHabilidades.css';

export default function CardHabilidades ({ url, name }) {
  return (
    <div className='container-card-hability'>
      <img src={ url } alt={ name } width='120px'/>
      <span>{ name }</span>
    </div>
  );
}