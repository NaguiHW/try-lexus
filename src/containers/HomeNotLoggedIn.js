import React from 'react';
import NavbarHome from './NavbarHome';

const HomeNotLoggedIn = () => (
  <div className="container">
    <NavbarHome />
    <div className="main-content">
      <div className="main-text">EXPERIENCE THE LEXUS</div>
      <div className="main-button-container"><a href="/signup" className="main-button">Create an Account</a></div>
    </div>
  </div>
);

export default HomeNotLoggedIn;
