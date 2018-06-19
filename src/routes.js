import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import SciencePage from './components/science/SciencePage';
import SchemasPage from './components/schemas/SchemasPage';
import NavigationRulesPage from './components/navigation/NavigationRulesPage';
import ResultPage from './components/result/ResultPage';
import Demo from './components/demo/Demo';

const AllRoutes = () => (
  <main>
    <Switch>
      <Redirect exact from="/" to="/science" />
      <Route path="/science" component={SciencePage} />
      <Route path="/schemas" component={SchemasPage} />
      <Route path="/navigation" component={NavigationRulesPage} />
      <Route path="/result" component={ResultPage} />
      <Route path="/demo" component={Demo} />
      <Redirect to="/" />
    </Switch>
  </main>
);

export default AllRoutes;
