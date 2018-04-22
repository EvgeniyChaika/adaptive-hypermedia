import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </main>
);

export default Routes;
