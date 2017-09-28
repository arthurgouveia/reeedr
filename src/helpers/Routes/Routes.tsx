import * as React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../../modules/Home';
import Profile from '../../modules/Profile';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          exact={true}
          component={Home}
        />
        <Route
          path="/profile"
          component={Profile}
        />
      </Switch>
    );
  }
}

export default Routes;
