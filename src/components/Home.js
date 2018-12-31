import React, { Component, Fragment } from "react";

const Content = () => {
  const items = ["First Item", "Second Item", "Third Item"];

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
        <h2>This is my app</h2>
        <h3>Choose what you want to see</h3>
        <button onClick={this.handleClick} className="pure-button">
          {show ? "Show Content" : "Hide Content"}
        </button>
        {!show ? <Content /> : null}
      </Fragment>
    );
  }
}

export default Home;
