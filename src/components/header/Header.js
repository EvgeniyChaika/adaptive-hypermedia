import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <NavLink to="/science" activeClassName="active">Наукові рішення</NavLink>
        {' | '}
        <NavLink to="/schemas" activeClassName="active">Схеми</NavLink>
        {' | '}
        <NavLink to="/navigation" activeClassName="active">Навігаційні правила</NavLink>
        {' | '}
        <NavLink to="/result" activeClassName="active">Результат</NavLink>
      </nav>
    );
  }
}

export default Header;
