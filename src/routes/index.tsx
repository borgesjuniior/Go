import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';
import signIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  /**
   * O Switch garante que apenas uma rota seja
   * exibida
   */
  <Switch>
    <Route path="/" exact component={signIn} />
    <Route path="/signup" component={SingUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
)

export default Routes;
