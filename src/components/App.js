import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import NavHeader from "./NavHeader";
import Topics from "./Topics";
import ButtonsContainer from "./../containers/ButtonsContainer";

import "../styles/App.css";

const App = () => (
  <div className="App">
    <NavHeader />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/header" component={Header} />
      <Route path="/buttons" component={ButtonsContainer} />
      <Route path="/topics" component={Topics} />
    </Switch>
  </div>
);

export default App;
