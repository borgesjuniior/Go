import React from 'react';
import { Switch, Route} from 'react-router-dom';

import signIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

const Routes: React.FC = () => (
  /**
   * O Switch garante que apenas uma rota seja
   * exibida
   */
  <Switch>
    <Route path="/" exact component={signIn} />
    <Route path="/signup" component={SingUp} />
  </Switch>
)

export default Routes;
