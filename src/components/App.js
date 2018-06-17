import React from 'react';
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

export default App;
