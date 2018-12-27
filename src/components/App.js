import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Header from "./Header";
import ButtonsContainer from "./../containers/ButtonsContainer";

import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>This is my app</h2>
        <h3>Choose what you want to see</h3>
        <section
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "20%"
            }}
          >
            <NavLink to="/header">
              <button className="pure-button pure-button-primary" type="button">
                Header
              </button>
            </NavLink>
            <NavLink to="/buttons">
              <button className="pure-button pure-button-primary" type="button">
                Buttons
              </button>
            </NavLink>
          </div>
        </section>
        <Route path="/header" component={Header} />
        <Route path="/buttons" component={ButtonsContainer} />
      </div>
    );
  }
}

export default App;
