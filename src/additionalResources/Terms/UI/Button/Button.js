import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className="PrimaryButton">{props.children}</button>
  )
}

export default Button;