import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ status }) => {
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
          <div className="menu-icon">
            <div className="line line-1" />
            <div className="line line-2" />
          </div>
          <ul className="nav-list">
            <li className="nav-item"><a href="/login" className="nav-link">Log in</a></li>
            <li className="nav-item"><a href="/signup" className="nav-link">Sign Up</a></li>
          </ul>
        </nav>
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
