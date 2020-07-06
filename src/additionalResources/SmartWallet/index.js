import React, { Component } from 'react';

import './index.css';
import SmartWallet from './containers/SmartWallet/SmartWallet';

class App extends Component {
  render() {
    return (
      <div className="SmartWallet">
        <SmartWallet />
      </div>
    );
  }
}

export default App;
