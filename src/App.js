import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Login, Errors } from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='*' component={Errors} />
        </Switch>
      </Router>
    );
  }
}

export default App;
