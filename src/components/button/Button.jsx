import React, { Children } from "react";
import "./button.scss";

const Button = ({ size, color, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`button button--${size} button--${color}`}
    >
      {children}
    </button>
  );
};

export default Button;
