import React from 'react';

const NavbarHome = () => {
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
        <li className="nav-item"><a href="/login" className="nav-link">Log in</a></li>
        <li className="nav-item"><a href="/signup" className="nav-link">Sign Up</a></li>
      </ul>
    </nav>
  );
};

export default NavbarHome;
