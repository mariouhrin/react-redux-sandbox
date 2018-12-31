import React, { Component, Fragment } from "react";
import Form from "./Form";

const Content = ({ show }) => {
  const items = ["First Item", "Second Item", "Third Item"];
  if (show) {
    return null;
  }

  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <ul style={{ textAlign: "left" }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

class Home extends Component {
  state = { show: true };

  handleClick = () => {
    this.setState(({ show }) => ({
      show: !show
    }));
  };

  render() {
    const { show } = this.state;

    return (
      <Fragment>
        <h2>This is my testing react-redux app</h2>
        <h3>Click to some upper button for changing routes and UI Content</h3>
        <button onClick={this.handleClick} className="pure-button">
          {show ? "Show Content" : "Hide Content"}
        </button>
        <Content show={show} />
        <Form show={show} />
      </Fragment>
    );
  }
}

export default Home;
