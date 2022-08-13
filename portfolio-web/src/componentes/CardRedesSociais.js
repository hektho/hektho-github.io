import React, { useState } from 'react'
import './CardRedesSociais.css';

export default function CardRedesSociais({ icone, nome, link }) {
  const [ isEmailCopied, setEmailCopied ] = useState(false); 

  const emailCopy = () => {
    const email = 'heitor2000costa@gmail.com';

    navigator.clipboard.writeText(email);

    setEmailCopied(true);
  }
  return (
    <a 
      href={ link } 
      target='_blank'
      rel='noreferrer' 
      className='flex flex-col items-center border-2 border-black m-2 card-container justify-center'
      onClick={ nome === 'E-mail' && emailCopy }
    >
      <img src={ icone } alt={ `ícone do ${nome}` } />
      <p className='text-2xl rede-social-nome'>
        { nome }
      </p>
      {nome === 'E-mail' && isEmailCopied && <h3 className='span'>
        E-mail copiado!
      </h3> }
    </a>
  );
}
