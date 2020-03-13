import React from 'react';
import lexusLogo from '../img/Lexus.svg';

const HomeLoggedIn = ({ logout }) => {
  
  return (
    <div className="container-4">
      <div className="side-menu">
        <div className="logo">
          <img src={lexusLogo} alt="Lexus" />
        </div>
        <div className="menu">

        </div>
        <div className="social-media">

        </div>
      </div>
      <div className="content" />
      <h1>
        Home status:
        (Connected)
      </h1>
      <button type="button" onClick={() => logout()}>Log Out</button>
    </div>
  );
};

export default HomeLoggedIn;
