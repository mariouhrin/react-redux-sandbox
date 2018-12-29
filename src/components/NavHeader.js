import React from "react";
import { NavLink } from "react-router-dom";

const NavHeader = props => (
  <section
    style={{
      display: "flex",
      justifyContent: "center",
      marginBottom: "10px"
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "25%"
      }}
    >
      <NavLink to="/">
        <button className="pure-button pure-button-primary" type="button">
          Home
        </button>
      </NavLink>
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
      <NavLink to="/test">
        <button className="pure-button pure-button-primary" type="button">
          Test
        </button>
      </NavLink>
    </div>
  </section>
);

export default NavHeader;
