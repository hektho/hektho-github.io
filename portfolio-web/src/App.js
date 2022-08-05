import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Inicio from "./paginas/Inicio";
import Home from './paginas/Home';
function App(props) {
  console.log(props);
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ Inicio } />
        <Route path='/home' component={ Home } />
      </Switch>
    </div>
  );
}

export default App;
