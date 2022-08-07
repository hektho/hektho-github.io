import React from "react";
import Header from "../componentes/Header";
import FotoPerfil from '../imagens/foto-perfil-atualizada.jpg';

export default function SobreMim() {
  return (
    <div>
      <Header />
      <section className="flex justify-center w-screen h-screen items-center">
        <section className="w-2/5">
          <h1>
            Quem sou eu?
          </h1>
          <p>
            Meu nome é Heitor e tenho 21 anos. Sou natural de Florianópolis, Santa Catarina e estudante de desenvolvimento web. Comecei a minha jornada neste novo mundo no início de 2022 através da Trybe e estou amando todo o processo! 
          </p>
        </section>
        <img src={ FotoPerfil } alt="Foto de perfil"  width='300px'/>
      </section>
    </div>
  );
}