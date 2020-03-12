import React from 'react';
import PropTypes from 'prop-types';
import HomeNotLoggedIn from './HomeNotLoggedIn';

const Home = ({ status, logout }) => {
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
          <button type="button" onClick={() => logout()}>Log Out</button>
        </div>
      );
    }
    return (
      <HomeNotLoggedIn />
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
  logout: PropTypes.func.isRequired,
};

export default Home;
