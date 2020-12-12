import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/home';
import Login from '../pages/auth/login';
import CreateAccount from '../pages/auth/createAccount';
import DashboardHome from '../pages/Dashboard/home/index';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/createaccount" component={CreateAccount} />

      <Route path="/dashboard" isPrivate component={DashboardHome} />
    </Switch>
  );
};

export default Routes;
