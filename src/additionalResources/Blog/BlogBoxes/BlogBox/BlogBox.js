import React from "react";

import "./BlogBox.css";

const BlogBox = props => {
  return (
    <div className="BoxContainer">
      <div className="BlogBox">
        <img src={props.image} alt={props.imgAlt} class="BoxImage" />
        <div className="BoxText">
          {/* {props.children} */}
          <h2>
            {props.BoxTitle}
          </h2>
          <p>
            {props.BoxContent}
            <div className="GradientBg">
              {props.GradientBg}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;