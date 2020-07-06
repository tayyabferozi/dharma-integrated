import React from 'react';

import './Investors.css';
import combinator from '../../../assets/combinator.svg';
import coinbase from '../../../assets/coinbase.svg';
import greenvisor from '../../../assets/greenvisor.svg';
import polychain from '../../../assets/polychain.svg';

const Investors = () => {
  return (
    <div className="Investors">
      <h2>We're backed by the best</h2>
      <p>
        In 2019, we closed out a $7m round of Series A investment, which was
        backed by some of the strongest names in the industry.
      </p>
      <div className="Logos">
        <img src={combinator} alt="combinator" />
        <img src={coinbase} alt="coinbase" />
        <img src={greenvisor} alt="greenvisor" />
        <img src={polychain} alt="polychain" />
      </div>
    </div>
  );
};

export default Investors;
