import React from "react";
import "./Paragraph.css";

const Paragraph = (props) => {
  return (
    <p className={"TermsParagraph " + props.center}>{props.children}</p>
  )
}

export default Paragraph;