import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <NavLink to="/science" activeClassName="active">Визначення вузлів</NavLink>
        {' | '}
        <NavLink to="/navigation" activeClassName="active">Формати навігаційних правил</NavLink>
        {' | '}
        <NavLink to="/schemas" activeClassName="active">Схема навігації</NavLink>
        {' | '}
        <NavLink to="/result" activeClassName="active">Результат</NavLink>
        {' | '}
        <NavLink to="/demo" activeClassName="active">Приклад реалізації</NavLink>
      </nav>
    );
  }
}

export default Header;
