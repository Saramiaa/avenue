import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import {Route, Switch} from "react-router-dom";
import Nav from './components/nav'
import Panier from './components/panier'


function App() {
  return (

    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component= {Home}/>
        <Route exact path="/panier" component= {Panier}/>

      </Switch>
    </div>

  );
}

export default App;
