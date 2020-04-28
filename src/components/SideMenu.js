import React from 'react';
import PropTypes from 'prop-types';
import lexusLogo from '../img/Lexus.svg';
import './HomeConnected.scss';

const SideMenu = ({ handleSelection, handleClick }) => (
  <div className="side-menu">
    <div className="logo">
      <img src={lexusLogo} alt="Lexus" />
    </div>
    <div className="menu">
      <nav>
        <ul className="menu-list">
          <li onClick={handleSelection} role="presentation" className="selection">SEDAN</li>
          <li onClick={handleSelection} role="presentation">SUV</li>
          <li onClick={handleSelection} role="presentation">COUPE</li>
          <li onClick={handleSelection} role="presentation">HYBRID</li>
          <li onClick={handleSelection} role="presentation" id="appointments">APPOINTMENTS</li>
        </ul>
      </nav>
    </div>
    <div className="social-media">
      <div className="icons">
        <i className="fab fa-twitter" />
        <i className="fab fa-facebook-f" />
        <i className="fab fa-google-plus-g" />
        <i className="fab fa-pinterest-p" />
      </div>
      <button type="button" onClick={handleClick}>Log Out</button>
    </div>
  </div>
);

SideMenu.propTypes = {
  handleSelection: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SideMenu;
