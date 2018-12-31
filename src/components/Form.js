import React, { Component } from "react";

class Form extends Component {
  state = { inputValue: "" };

  handleChange = e => {
    e.preventDefault();
    const inputValue = e.target.value;
    this.setState(() => ({
      inputValue
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputValue } = this.state;
    this.timeout = setTimeout(() => {
      alert(inputValue);
    }, 1000);
  };

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    const { inputValue } = this.state;
    const { show } = this.props;
    if (show) {
      return null;
    }

    return (
      <article style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={this.handleSubmit} style={{ width: "20%" }}>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              value={inputValue}
              onChange={this.handleChange}
              id="name"
              placeholder="Your Name"
            />
          </label>
          <button
            className="pure-button"
            style={{ marginTop: "10px" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </article>
    );
  }
}

export default Form;
