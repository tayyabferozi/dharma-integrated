import React from "react";

import "./Footer.css";
import Button from "../UI/Button/Button";

const Footer = () => {
  return (
    <div className="Footer">
      <Button>Twitter</Button>
      <Button>Careers</Button>
      <Button>Blog</Button>
      <Button>Discord</Button>
      <Button>Terms</Button>
    </div>
  );
};

export default Footer;
