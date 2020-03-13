import React from 'react';
import lexusLogo from '../img/Lexus.svg';
import './HomeLoggedIn.scss';

const HomeLoggedIn = ({ logout }) => {
  const select = e => {
    const parent = e.target.parentElement;
    for (let i = 0; i < parent.children.length; i += 1) {
      parent.children[i].classList.remove('selection');
    }
    const item = e.target;
    item.classList.add('selection');
  };

  return (
    <div className="container-4">
      <div className="side-menu">
        <div className="logo">
          <img src={lexusLogo} alt="Lexus" />
        </div>
        <div className="menu">
          <nav>
            <ul>
              <li onClick={select} role="presentation">SEDANS</li>
              <li onClick={select} role="presentation">SUVS</li>
              <li onClick={select} role="presentation">COUPES</li>
              <li onClick={select} role="presentation">HYBRIDS</li>
              <li onClick={select} role="presentation">TEST DRIVES</li>
              <li onClick={select} role="presentation">APPOINTMENTS</li>
            </ul>
          </nav>
        </div>
        <div className="social-media">

          <button type="button" onClick={() => logout()}>Log Out</button>
        </div>
      </div>
      <div className="content" />
    </div>
  );
};

export default HomeLoggedIn;
