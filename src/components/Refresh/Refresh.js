import React from 'react';

import "./Refresh.css";
import RefreshIcon from "../../media/Refresh.jpg"

const Refresh = () => {
  return (
    <div className="Refresh">
      <div className="RefreshIcon">
        <img src={RefreshIcon} alt="Refresh" />
        <p className="Mono">
          Lost Your Key?
        </p>
      </div>
      <h2>
        Dharma has your back.
        </h2>
      <p>
        If you ever lose access to your device, Dharma can reset your key for you – but only after a 7-day security period.
      </p>
    </div>
  );
}

export default Refresh;
