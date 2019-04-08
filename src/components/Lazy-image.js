import React from "react";
import logo from "./../logo.png";

const LazyImage = ({ show }) => {
  if (show) {
    return null;
  }

  return (
    <div>
      <img src={logo} alt="my pic" />
    </div>
  );
};

export default LazyImage;
