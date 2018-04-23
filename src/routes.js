import React from 'react';
import { Route, Switch } from 'react-router';
import SciencePage from './components/science/SciencePage';
import SchemasPage from './components/schemas/SchemasPage';
import NavigationRulesPage from './components/navigation/NavigationRulesPage';
import ResultPage from './components/result/ResultPage';
import HomePage from './components/home/HomePage';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/science" component={SciencePage} />
      <Route path="/schemas" component={SchemasPage} />
      <Route path="/navigation" component={NavigationRulesPage} />
      <Route path="/result" component={ResultPage} />
    </Switch>
  </main>
);

export default Routes;
