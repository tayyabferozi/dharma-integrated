import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.bundle';

import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';

import Routes from './Routes';

const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    );
  }
}
