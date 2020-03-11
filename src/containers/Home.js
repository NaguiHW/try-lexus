import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ status }) => {
  const showMenu = () => {
    const navbar = document.getElementsByClassName('navbar');
    const line1 = document.getElementsByClassName('line-1');
    const line2 = document.getElementsByClassName('line-2');
    line1[0].classList.toggle('change-1');
    line2[0].classList.toggle('change-2');
    navbar[0].classList.toggle('move-left');
  };

  const renderHome = () => {
    if (status === 'CONNECTED') {
      return (
        <div>
          <h1>
            Home status:
            {' '}
            {status}
            <br />
            (Connected)
          </h1>
        </div>
      );
    }
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
        <div className="main-text">EXPERIENCE THE LEXUS</div>
      </div>
    );
  };

  return (
    <>
      { renderHome() }
    </>
  );
};

Home.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Home;
