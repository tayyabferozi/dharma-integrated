import React, { Fragment } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import Button from '../UI/Button/Button';
import SideDrawer from '../../../additionalResources/SideDrawer/SideDrawer';

const Navbar = () => {
  let hamburgerClickHandler;

  hamburgerClickHandler = () => {
    $('#SideDrawer').slideToggle();
  };
  return (
    <div className="NavbarSideDrawerWrapper">
      <div className="Navbar">
        <span className="BlogLogo">
          {/* <svg
            width="52"
            height="52"
            fill="currentColor"
            className="sc-gzVnrw bxKtkr"
            color="#000"
            cursor="pointer"
            viewBox="0 0 52 52">
            <path d="M15.65 29.55l9.74-6V2a23.9 23.9 0 00-9.74 2.33zm-2.08 1.27V5.5a24 24 0 00-9.16 30.93zm13.91 7.49l9.74-6V4.81a23.77 23.77 0 00-9.74-2.73zm-2.09 1.3V26l-20 12.26a24.09 24.09 0 008.55 8.5zM39.3 31l10.62-6.58a23.91 23.91 0 00-3.09-10.27l-7.53 4.4zm0-24.93V16.2l6.46-3.77a24 24 0 00-6.46-6.37zm0-2.41A26 26 0 1126 0a26 26 0 0113.3 3.66zM16 47.8a24 24 0 0034-21.03z"></path>
          </svg> */}
          <img
            style={{ width: '60px', marginRight: '1rem' }}
            src={require('../../../assets/logo.png')}
          />
          Support
        </span>
        <div className="Nav">
          <Link to="/users">
            <Button>Users</Button>
          </Link>
          <Link to="/retailers">
            <Button>Retailers</Button>
          </Link>
          <Link to="/login">
            <Button type="Login">Login</Button>
          </Link>
        </div>
        <div
          className="Hamburger"
          id="Hamburger"
          onClick={hamburgerClickHandler}>
          <div className="Line1" />
          <div className="Line2" />
          <div className="Line3" />
        </div>
      </div>
      <SideDrawer />
    </div>
  );
};

export default Navbar;
