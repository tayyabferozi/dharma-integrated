import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import Button from '../UI/Button/Button';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="ButtonContainer">
        <Button>Twitter</Button>
        <Link to="/careers">
          <Button>Careers</Button>
        </Link>
        <Link to="/blog">
          <Button>Blog</Button>
        </Link>
        <Button>Discord</Button>
        <Link to="terms">
          <Button>Terms</Button>
        </Link>
      </div>
      <div className="FooterText">
        <p>
          Digital currency is not legal tender, is not backed by the government,
          and digital currency accounts and value balances on Dharma are not
          subject to Federal Deposit Insurance Corporation or Securities
          Investor Protection Corporation protections. Dharma is not a bank and
          does not offer fiduciary services. The interest rates reflected on
          this page are as of the current date and time, and may change at any
          time, before or after the account is opened on Dharma.
        </p>
      </div>
    </div>
  );
};

export default Footer;
