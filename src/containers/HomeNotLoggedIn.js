import React from 'react';

const HomeNotLoggedIn = () => {
  const showMenu = () => {
    const navbar = document.getElementsByClassName('navbar');
    const line1 = document.getElementsByClassName('line-1');
    const line2 = document.getElementsByClassName('line-2');
    line1[0].classList.toggle('change-1');
    line2[0].classList.toggle('change-2');
    navbar[0].classList.toggle('move-left');
  };

  return (
    <div className="container">
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
      <div className="main-content">
        <div className="main-text">EXPERIENCE THE LEXUS</div>
        <div className="main-button-container"><a href="/signup" className="main-button">Create an Account</a></div>
      </div>
    </div>
  );
};

export default HomeNotLoggedIn;
