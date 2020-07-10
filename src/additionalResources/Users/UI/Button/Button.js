import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <button className={props.type + " " + props.responsiveness}>{props.children}</button>
  )
}

export default Button;