import React from "react";

import "./Article.css"

const Article = props => {
  const direction = (props.alignment === "left" ? "row" : "row-reverse");
  const ColImgMarginStyle = (direction === "row" ? { marginLeft: "-25px" } : { marginLeft: "40px" });
  // const ColImgMarginStyle = (direction === "row" ? { marginLeft: "-28px" } : { marginRight: "-60px" });
  return (
    <div className="Article">
      <div className="Row" style={{ flexDirection: direction }}>
        <div className="Col ColImg">
          <img src={props.img} alt={props.imageAlt} className="ArticleImage" style={ColImgMarginStyle} />
        </div>
        <div className="Col ColText">
          <h2>{props.SectionTitle}</h2>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;