import React from 'react';
import { Link } from 'react-router-dom';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>About</h1>
        <p>About page</p>
        <Link to="/" className="btn btn-primary btn-lg">Back</Link>
      </div>
    );
  }
}

export default AboutPage;

