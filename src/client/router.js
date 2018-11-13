import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import App from './App';
import Login from './Login';

class MRoute extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/app" component={App} />
        </Switch>
      </Router>
    );
  }
}

export default MRoute;
