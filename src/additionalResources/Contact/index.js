import React, { Component } from 'react';

import './index.css';
import Navbar from './Navbar/Navbar';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

class ContactContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="TextCenter Contact">
          <Navbar />
          <Contact />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default ContactContainer;
