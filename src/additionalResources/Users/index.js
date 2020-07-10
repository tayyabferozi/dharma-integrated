import React, { Component } from 'react';

import './index.css';
import Navbar from './Navbar/Navbar';
import Magic from './Magic/Magic';
import Upload from './Upload/Upload';
import Compound from './Compound/Compound';
import GrowMoney from './GrowMoney/GrowMoney';
import Features from './Features/Features';
import Questions from './Questions/Questions';
import Start from './Start/Start';
import Footer from './Footer/Footer';
import LiveSupport from './UI/LiveSupport/LiveSupport';

class UsersContainer extends Component {
  render() {
    return (
      <div className="TextCenter HowDharmaWorksContainer">
        <Navbar />
        <Magic />
        <Upload />
        <Compound />
        <GrowMoney />
        <Features />
        <Questions />
        <Start />
        <Footer />
        <LiveSupport />
      </div>
    );
  }
}

export default UsersContainer;
