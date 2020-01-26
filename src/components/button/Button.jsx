import React, { Children } from "react";
import "./button.scss";

const Button = ({ size, color, type, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`button button--${size} button--${color} button--${type}`}
    >
      {children}
    </button>
  );
};

export default Button;
