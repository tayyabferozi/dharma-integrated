import React from 'react';

import "./Keys.css";
import Laptop from "../../media/Laptop.png";

const Keys = () => {
  return (
    <div className="Keys">
      <p className="Mono">
        YOUR KEYS. YOUR CRYPTO.
      </p>

      <div className="Text">

        <h2>
          Your keys are stored on your devices, not the cloud.
      </h2>
        <p>
          When you create your Dharma Account, a cryptographic key is stored on your device. Without this key, your money isn’t going anywhere.
      </p>
      </div>
      <div className="Image">
        <img src={Laptop} alt="laptop" />
      </div>
    </div>
  );
}

export default Keys;
