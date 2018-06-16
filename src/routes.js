import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router';
import SciencePage from './components/science/SciencePage';
import SchemasPage from './components/schemas/SchemasPage';
import NavigationRulesPage from './components/navigation/NavigationRulesPage';
import ResultPage from './components/result/ResultPage';
import HomePage from './components/home/HomePage';
import ScienceSubmitResult from './components/science/submitResult/ScienceSubmitResult';

const AllRoutes = () => (
  <main>
    <Switch>
      <Redirect exact from="/" to="/science" />
      <Route path="/science" component={SciencePage} />
      <Route path="/results/object" component={ScienceSubmitResult} /> TODO
      <Route path="/schemas" component={SchemasPage} />
      <Route path="/navigation" component={NavigationRulesPage} />
      <Route path="/result" component={ResultPage} />
      <Redirect to="/" />
    </Switch>
  </main>
);

export default AllRoutes;
