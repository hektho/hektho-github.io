import React from "react";
import Header from "../componentes/Header";

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen absolute">
      <Header />
      <h1 className="text-4xl text-white">
        {'Seja bem vindo(a) ao meu Portfolio Web'}
      </h1>

    </div>
  );
}