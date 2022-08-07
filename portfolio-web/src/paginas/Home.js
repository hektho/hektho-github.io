import React from "react";
import Header from "../componentes/Header";
import './Home.css';

export default function Home() {
  return (
    <div className="w-screen h-screen absolute home-container">
      <Header />
      <section className="justify-center items-center p-10">
        <h1 className="text-4xl text-white">
          {'Seja bem vindo(a) ao meu Portfolio Web!'}
        </h1>
        <h2 className=" text-2xl text-white">
          Aqui ficarão registrados os meus projetos ao longo dos meus estudos em desenvolvimento web.
        </h2>
      </section>

    </div>
  );
}