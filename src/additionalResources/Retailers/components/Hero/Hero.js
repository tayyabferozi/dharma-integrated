import React, { Component } from 'react';

import './Hero.css';

class Hero extends Component {
  state = {
    gradientClass: null
  };

  render() {
    return (
      <div className="Hero">
        <div className="GradientCircleContainer">
          <img src={require('../../../../assets/logo-white.png')} alt="" />
          <div className="GradientCircle"></div>
          <div className="GradientInnerCircle"></div>
        </div>

        <h3>Introducing Dharma</h3>
        <h1>Retailers</h1>
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            color="white"
            fill="currentColor"
            class="sc-gZMcBi iZiZed">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0.300049C5.4 0.300049 0 5.70005 0 12.3C0 17.6 3.4 22.1 8.2 23.7001C8.8 23.8001 9 23.4 9 23.1C9 22.8001 9 22.1 9 21.1C5.7 21.8001 5 19.5 5 19.5C4.5 18.1 3.7 17.7001 3.7 17.7001C2.5 17 3.7 17 3.7 17C4.9 17.1 5.5 18.2001 5.5 18.2001C6.6 20 8.3 19.5 9 19.2001C9.1 18.4001 9.4 17.9 9.8 17.6C7.1 17.3001 4.3 16.3 4.3 11.7C4.3 10.4 4.8 9.30005 5.5 8.50005C5.5 8.10005 5 6.90005 5.7 5.30005C5.7 5.30005 6.7 5.00005 9 6.50005C10 6.20005 11 6.10005 12 6.10005C13 6.10005 14 6.20005 15 6.50005C17.3 4.90005 18.3 5.30005 18.3 5.30005C19 7.00005 18.5 8.20005 18.4 8.50005C19.2 9.30005 19.6 10.4 19.6 11.7C19.6 16.3 16.8 17.3001 14.1 17.6C14.5 18 14.9 18.7 14.9 19.8C14.9 21.4 14.9 22.7001 14.9 23.1C14.9 23.4 15.1 23.8001 15.7 23.7001C20.5 22.1 23.9 17.6 23.9 12.3C24 5.70005 18.6 0.300049 12 0.300049Z"></path>
          </svg>
          View Open Source Code
        </button>
      </div>
    );
  }
}

export default Hero;
