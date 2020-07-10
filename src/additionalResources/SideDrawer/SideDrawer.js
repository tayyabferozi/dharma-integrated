import React, { useEffect } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

import './SideDrawer.css';

const SideDrawer = () => {
  useEffect(() => {
    $('.NavItem').click(function() {
      $(this)
        .find('.DropdownIndicator')
        .toggleClass('Up');
      $(this)
        .next()
        .find('.DropDownContent')
        .slideToggle();
    });
  }, []);
  return (
    <React.Fragment>
      <div className="SideDrawer" id="SideDrawer">
        <div className="SearchContainer">
          <div className="Search">
            <input type="search" placeholder="Search" />
            <img src={require('../../assets/search.svg')} alt="search" />
          </div>
          <button>English</button>
        </div>
        <div className="NavItemContainer">
          <div className="NavItem">
            <span>Payments Network</span>
            <span className="DropdownIndicator"></span>
          </div>
          <Link to="/support">
            <div className="DropDownContent">Support</div>
          </Link>
        </div>
        <div className="NavItemContainer">
          <div className="NavItem">
            <span>Customers</span> <span className="DropdownIndicator"></span>
          </div>
          <Link to="/login">
            <div className="DropDownContent">Log In</div>
          </Link>
        </div>
        <div className="NavItemContainer">
          <div className="NavItem">
            <span>Resources</span> <span className="DropdownIndicator"></span>
          </div>
          <Link to="/retailers">
            <div className="DropDownContent">Retailers</div>
          </Link>
        </div>
        <div className="NavItemContainer">
          <div className="NavItem">
            <span>About Us</span> <span className="DropdownIndicator"></span>
          </div>
          <Link to="/users">
            <div className="DropDownContent">Users</div>
          </Link>
        </div>
        <div className="NavItemContainer">
          <div className="NavItem">
            <span>Products</span> <span className="DropdownIndicator"></span>
          </div>
          {/* <Link to="/users"> */}
          <div className="DropDownContent">lorem</div>
          {/* </Link> */}
        </div>
        <div className="NavItemContainer">
          <div className="NavItem">
            <span>Integration</span> <span className="DropdownIndicator"></span>
          </div>
          {/* <Link to="/lorem"> */}
          <div className="DropDownContent">lorem</div>
          {/* </Link> */}
        </div>
        <div className="NavItemContainer">
          <div className="NavItem">
            <span>On Boarding</span> <span className="DropdownIndicator"></span>
          </div>
          {/* <Link to="/lorem"> */}
          <div className="DropDownContent">lorem</div>
          {/* </Link> */}
        </div>
        <Link to="/contact">
          <button className="ContactUs">Contact Us</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
