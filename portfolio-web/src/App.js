import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Inicio from "./paginas/Inicio";
import Home from './paginas/Home';
import SobreMim from './paginas/SobreMim';
import Projetos from "./paginas/Projetos";
import Habilidades from "./paginas/Habilidades";
import Contatos from "./paginas/Contatos";

function App(props) {
  console.log(props);
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ Inicio } />
        <Route path='/home' component={ Home } />
        <Route path='/sobre-mim' component={ SobreMim } />
        <Route path='/projetos' component={ Projetos } />
        <Route path='/habilidades' component={ Habilidades } />
        <Route path='/contatos'component={ Contatos } />
      </Switch>
    </div>
  );
}

export default App;
