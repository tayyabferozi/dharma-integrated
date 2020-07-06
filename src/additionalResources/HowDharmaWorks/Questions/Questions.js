import React from "react";

import "./Questions.css";
import Button from "../UI/Button/Button";

const Questions = () => {
  return (
    <div className="Questions">
      <h2>
        Any questions?
      </h2>
      <Button type="Gradient">
        Read Our FAQ
      </Button>
    </div>
  );
};

export default Questions;