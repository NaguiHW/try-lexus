import React from 'react';
import PropTypes from 'prop-types';
import HomeNotLoggedIn from './HomeNotLoggedIn';
import HomeLoggedIn from './HomeLoggedIn';

const Home = ({ status, logout }) => {
  const renderHome = () => {
    if (status === 'CONNECTED') {
      return (
        <HomeLoggedIn logout={logout} />
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
