import React from 'react';
// import { PropTypes } from 'prop-types';
import AllRoutes from '../routes';
import Header from './header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <AllRoutes />
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default App;
