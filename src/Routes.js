import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';

import { Dashboard as DashboardView } from './views';
import BlogContainer from './additionalResources/Blog';
import Contact from './additionalResources/Contact';
import Careers from './additionalResources/Careers';
import UsersContainer from './additionalResources/Users';
import Retailers from './additionalResources/Retailers';
import TermsContainer from './additionalResources/Terms';

import RoutWithLayout from './additionalResources/routeWithLayout/RouteWithLayout';
import MainView from './layouts/Main/MainView'; //with navbar and footer
import MinimalView from './layouts/Minimal/MinimalView'; //without navbar and footer
import Auth from './views/auth/Auth';
import FAQ from './views/support/support';

const Routes = () => {
  return (
    <Switch>
      {/* <Redirect exact from="/" to="/dashboard" /> */}
      <RouteWithLayout
        component={DashboardView}
        layout={MainLayout}
        exact
        path="/dashboard"
      />
      <Route exact path="/blog" component={BlogContainer} />
      <Route exact path="/careers" component={Careers} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/users" component={UsersContainer} />
      <Route exact path="/retailers" component={Retailers} />
      <Route exact path="/terms" component={TermsContainer} />
      <RoutWithLayout
        exact
        path="/login"
        component={Auth}
        layout={MinimalView}
      />
      <RoutWithLayout exact path="/support" component={FAQ} layout={MainView} />
      <Redirect to="/dashboard" />
    </Switch>
  );
};

export default Routes;
