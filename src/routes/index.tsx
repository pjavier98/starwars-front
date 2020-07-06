import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Character from '../pages/Character';
import Starship from '../pages/Starship';
import Planet from '../pages/Planet';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/characters" exact component={Character} />
    <Route path="/starships" exact component={Starship} />
    <Route path="/planets" exact component={Planet} />
  </Switch>
);

export default Routes;
