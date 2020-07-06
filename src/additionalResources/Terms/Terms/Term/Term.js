import React, { Fragment } from "react";
import "./Term.css"
import Paragraph from "../Paragraph/Paragraph";

const Term = (props) => {
  return (
    <Fragment>
      <h4 className="TermHeading">{props.heading}</h4>
      <Paragraph>{props.children}</Paragraph>
    </Fragment>
  );
};

export default Term;