import React, { Component } from "react";
import "./Auth.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginWrapepr = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: linear-gradient(
      60.4deg,
      rgb(0, 84, 253) 0%,
      rgb(255, 25, 247) 32.29%,
      rgb(255, 46, 93) 57.29%,
      rgb(255, 170, 7) 84.38%,
      rgb(230, 185, 116) 100%
    )
    0% 0% / 100% 100%;
  box-sizing: border-box;
  flex: 1 1 0%;
  flexdirection: row;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
`;

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      isPassword: true,
    };
  }
  render() {
    return (
      <LoginWrapepr className="login_wrapper">
        <div className="left-Login">
          <div className="form">
            <img
              src="/images/logo/dharma-gray.png"
              alt=""
              className="logo_navabr"
            />
            <h3 className="login-header">
              Log In to <br /> Dharma
            </h3>
            <div>
              <div className="input_wrapper">
                <div className="label_wrapper">
                  <label htmlFor="email" className="label">
                    Enter your Email Address
                  </label>
                </div>
                <div className="inputbox_wrapper">
                  <input type="email" id="email" className="input" />
                </div>
              </div>
              <div className="input_wrapper">
                <div className="label_wrapper">
                  <label htmlFor="password" className="label">
                    Enter your Password
                  </label>
                  <label htmlFor="" className="label_forgot_pass_wrapper">
                    <Link to="" className="label_forgot_pass">
                      Forgot your Password?
                    </Link>
                  </label>
                </div>
                <div className="inputbox_wrapper">
                  <input
                    type={this.state.isPassword ? `password` : `text`}
                    id="password"
                    className="input"
                  />
                  <div
                    className="password_toggler"
                    onClick={() => {
                      this.setState({ isPassword: !this.state.isPassword });
                    }}
                  >
                    <span className="password_toggler_icon_wrapper">
                      {this.state.isPassword ? (
                        <FaRegEye className="password_toggler_icon" />
                      ) : (
                        <FaRegEyeSlash className="password_toggler_icon" />
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/support">
                <button className="Login_button">Log In</button>
              </Link>
              <div className="or_login_wrapper">
                <div className="or_login_line"></div>
                <div className="or_login_text">OR</div>
                <div className="or_login_line"></div>
              </div>
              <button className="log_with_other">Log In with coinbase</button>
            </div>
          </div>
        </div>
        <div className="right-Login"></div>
      </LoginWrapepr>
    );
  }
}

export default Auth;
