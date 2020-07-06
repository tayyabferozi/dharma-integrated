import React from 'react';

import "./FirstOfKind.css";
import Address from "../../media/Address.jpg"

const FirstOfKind = () => {
  return (
    <div className="FirstOfKind">
      <div className="Animation">
        <div className="AnimationOuterBox">
          <div className="AnimationInnerBox"></div>
        </div>
      </div>

      <div className="RestContainer">
        <div className="Rest">
          <img src={Address} alt="address" />
          <h2>
            The first Ethereum wallet that
          <div className="GradientAnimation">is always earning interest.</div>
          24/7/365.
        </h2>
          <p>
            Your Dharma Account is the first of it’s kind — an Ethereum address that generates interest instantly on all USD Coin and Dai balances.
        </p>
        </div>
      </div>
    </div>
  );
}

export default FirstOfKind;
