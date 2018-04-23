import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <NavLink to="/" activeClassName="active">Home</NavLink>
        {' | '}
        <NavLink to="/about" activeClassName="active">About</NavLink>
      </nav>
    );
  }
}

export default Header;
