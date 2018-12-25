import React, { Component } from "react";
import Header from "./Header";
import ButtonsContainer from "./../containers/ButtonsContainer";

import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ButtonsContainer />
      </div>
    );
  }
}

export default App;
