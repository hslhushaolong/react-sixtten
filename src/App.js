import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Login, Errors } from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={Login} />
        <Route path='*' component={Errors} />
      </Router>
    );
  }
}

export default App;
