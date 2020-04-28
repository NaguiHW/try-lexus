import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';

const Navbar = ({
  text1, text2, clickHandler, showMenu,
}) => (
  <nav className="navbar">
    <div className="menu-icon" onClick={showMenu} role="presentation">
      <div className="line line-1" />
      <div className="line line-2" />
    </div>
    <ul className="nav-list">
      <li className="nav-item" onClick={clickHandler} role="presentation">{text1}</li>
      <li className="nav-item" onClick={clickHandler} role="presentation">{text2}</li>
    </ul>
  </nav>
);

Navbar.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  showMenu: PropTypes.func.isRequired,
};

export default Navbar;
