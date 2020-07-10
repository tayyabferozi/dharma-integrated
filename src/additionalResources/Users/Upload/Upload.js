import React from 'react';

import './Upload.css';
import dEqualDollar from '../../../assets//dEqualDollar.jpg';

const Upload = () => {
  return (
    <div className="Upload">
      <div className="UploadAnimatorWrapper">
        <div className="UploadAnimator">
          <div className="Box BigBox"></div>
          <div className="Box SmallBox"></div>
          <svg
            fill="none"
            viewBox="0 0 135 177"
            width="8.438rem"
            height="11.063rem"
            className="Arrow">
            <path
              d="M61.6169 3.16815L0.123331 64.6617L11.4055 75.9439L59.279 28.0704L59.279 168.388C59.279 172.8 62.8536 176.367 67.2579 176.367C71.6623 176.367 75.2369 172.8 75.2369 168.388L75.2369 28.0704L123.11 75.9439L134.393 64.6617L72.8991 3.16815C69.7793 0.04838 64.7366 0.0483795 61.6169 3.16815Z"
              fill="url(#uploadArrow)"></path>
            <defs>
              <linearGradient
                id="uploadArrow"
                x1="138.61"
                y1="191.972"
                x2="-3.91414"
                y2="-22.1619"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#0054FD"></stop>
                <stop offset="0.25" stopColor="#FF19F7"></stop>
                <stop offset="0.479167" stopColor="#FF2E5D"></stop>
                <stop offset="0.75" stopColor="#FFAA07"></stop>
                <stop offset="1" stopColor="#E6B974"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <h2>
        Upload your money to the{' '}
        <span className="UploadGradient">internet.</span>
      </h2>
      <p>
        Dharma can do things your bank can’t because Dharma is powered by
        special cryptocurrencies called stablecoins. They're just like normal
        dollars, but they live on the internet – which means they can do magical
        things.
      </p>
      <img src={dEqualDollar} alt="dollar-price" />
    </div>
  );
};

export default Upload;
