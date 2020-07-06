import React from "react";

import "./Benefit.css"

const Benefit = props => {
  return (
    <div className="Benefit">
      <h5>{props.benefitTitle}</h5>
      <p>{props.children}</p>
    </div>
  );
};

export default Benefit;