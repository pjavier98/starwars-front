import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Character from '../pages/Character';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />

    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/characters" exact component={Character} />
  </Switch>
);

export default Routes;
