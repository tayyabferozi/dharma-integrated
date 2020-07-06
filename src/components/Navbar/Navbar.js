import React from "react";
import "./Navbar.css";

import Button from "../UI/Button/Button";

const Navbar = () => {
  return (
    <div className="Navbar">
      <svg width="52" height="52" viewBox="0 0 52 52" color="white" cursor="pointer" fill="currentColor" class="sc-VigVT cdYhnp"><path d="M15.65,29.55l9.74-6V2a23.9,23.9,0,0,0-9.74,2.33Zm-2.08,1.27V5.5A24,24,0,0,0,4.41,36.43Zm13.91,7.49,9.74-6V4.81a23.77,23.77,0,0,0-9.74-2.73Zm-2.09,1.3V26l-20,12.26a24.09,24.09,0,0,0,8.55,8.5ZM39.3,31l10.62-6.58a23.91,23.91,0,0,0-3.09-10.27L39.3,18.55Zm0-24.93V16.2l6.46-3.77A24,24,0,0,0,39.3,6.06Zm0-2.41h0A26,26,0,1,1,26,0,26,26,0,0,1,39.3,3.66ZM16,47.8A24,24,0,0,0,50,26.77Z"></path></svg>
      <div className="Nav">
        <Button>FAQs</Button>
        <Button responsiveness="HideSm">How it Works</Button>
        <Button type="Login">Log In</Button>
      </div>
    </div>
  );
};

export default Navbar;