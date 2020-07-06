import React, { Component } from 'react';

import './index.css';
import Navbar from './Navbar/Navbar';
import Terms from './Terms/Terms';
import Footer from './Footer/Footer';
import LiveSupport from './UI/LiveSupport/LiveSupport';

class TermsContainer extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    console.log('[Component did mount]');
    this.setState({
      isLoading: false
    });
  }

  render() {
    return (
      <div className="Terms">
        <Navbar />
        <Terms />
        <Footer />
        <LiveSupport />
      </div>
    );
  }
}

export default TermsContainer;
