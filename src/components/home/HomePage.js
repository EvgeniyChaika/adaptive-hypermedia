import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Adaptive Hypermedia</h1>
        <p>Home page</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
