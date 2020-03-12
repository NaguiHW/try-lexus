import React from 'react';
import PropTypes from 'prop-types';
import './NavbarHome.scss';

const NavbarHome = ({
  text1, text2, path1, path2,
}) => {
  const showMenu = () => {
    const navbar = document.getElementsByClassName('navbar');
    const line1 = document.getElementsByClassName('line-1');
    const line2 = document.getElementsByClassName('line-2');
    line1[0].classList.toggle('change-1');
    line2[0].classList.toggle('change-2');
    navbar[0].classList.toggle('move-left');
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={showMenu} role="presentation">
        <div className="line line-1" />
        <div className="line line-2" />
      </div>
      <ul className="nav-list">
        <li className="nav-item"><a href={path1} className="nav-link">{text1}</a></li>
        <li className="nav-item"><a href={path2} className="nav-link">{text2}</a></li>
      </ul>
    </nav>
  );
};

NavbarHome.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  path1: PropTypes.string.isRequired,
  path2: PropTypes.string.isRequired,
};

export default NavbarHome;
