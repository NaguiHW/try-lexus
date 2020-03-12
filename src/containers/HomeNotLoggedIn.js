import React from 'react';
import NavbarHome from './NavbarHome';
import './HomeNotLoggedIn.scss';

const HomeNotLoggedIn = () => (
  <div className="container">
    <NavbarHome text1="Log In" path1="/login" text2="Sign Up" path2="/signup" />
    <div className="main-content">
      <div className="main-text">EXPERIENCE THE LEXUS</div>
      <div className="main-button-container"><a href="/signup" className="main-button">Create an Account</a></div>
    </div>
  </div>
);

export default HomeNotLoggedIn;
