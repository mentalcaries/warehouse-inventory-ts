import './Header.css';
import logo from '../../images/warehouse.png'
import Navigation from '../Navigation/Navigation';
import {Link} from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header__items">
        <Link to="/">
          <img src={logo} alt="" className="header__logo" />
        </Link>
        <h1 className="header__title">Inventory Management System</h1>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
