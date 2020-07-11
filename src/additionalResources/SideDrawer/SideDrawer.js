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
            {/* <span>Payments Network</span>
            <span className="DropdownIndicator"></span> */}
            <Link to="/support">
              <div className="">Support</div>
            </Link>
          </div>
        </div>
        <div className="NavItemContainer">
          <div className="NavItem">
            {/* <span>Customers</span> <span className="DropdownIndicator"></span> */}
            <Link to="/login">
              <div className="">Log In</div>
            </Link>
          </div>
        </div>
        <div className="NavItemContainer">
          <div className="NavItem">
            {/* <span>Customers</span> <span className="DropdownIndicator"></span> */}
            <Link to="/users">
              <div className="">Users</div>
            </Link>
          </div>
        </div>
        <div className="NavItemContainer">
          <div className="NavItem">
            <span>Retailers</span> <span className="DropdownIndicator"></span>
          </div>
          <div>
            <div className="DropDownContent">
              <Link style={{ margin: '0.5rem 0' }} to="/retailers">
                Retailers
              </Link>
              <div style={{ margin: '0.5rem 0' }} className="">
                Onboarding
              </div>
              <div style={{ margin: '0.5rem 0' }} className="">
                Products
              </div>
              <div style={{ margin: '0.5rem 0' }} className="">
                Integration
              </div>
            </div>
          </div>
        </div>
        {/* <div className="NavItemContainer">
          <div className="NavItem">
            <span>About Us</span> <span className="DropdownIndicator"></span>
          </div>
          <Link to="/users">
            <div className="DropDownContent">Users</div>
          </Link>
        </div> */}
        <Link to="/contact">
          <button className="ContactUs">Contact Us</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
