import React from 'react';
import { userRules } from '../../consts';

class NavigationRulesPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div>
          <h3>Загальне користувальницьке правило</h3>
          <p>{userRules.D}</p>
          <p>{userRules.E}</p>
        </div>
      </div>
    );
  }
}

export default NavigationRulesPage;
