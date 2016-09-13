import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-route';
import App from './app';
import SearchContainer from './SearchContainer';

export default const AppRouter = () => (
  <Router history={hashHistory}>
    <Route path="/" component={ App }>
      <IndexRoute component={ SearchContainer } />
    </Route>
  </Router>
)
