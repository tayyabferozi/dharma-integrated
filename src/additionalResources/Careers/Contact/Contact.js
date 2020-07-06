import React from 'react';

import './Contact.css';
import logo from '../../../assets/logo-dark.svg';

const Contact = () => {
  return (
    <div className="Contact">
      <h5>Don’t see a role here that suits your skill set?</h5>
      <p>
        We’re always interested in hearing from anyone with a passion for what
        we’re building, no matter their background. Send an email outlining who
        you are and why you’re interested in Dharma to us at careers@dharma.io
      </p>
      <img src={logo} alt="dharma" />
    </div>
  );
};

export default Contact;
