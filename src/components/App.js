import React from 'react';
// import { PropTypes } from 'prop-types';
import Routes from '../routes';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header here...</p>
        <Routes />
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default App;
