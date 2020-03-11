import React from 'react';
import PropTypes from 'prop-types';
import HomeNotLoggedIn from './HomeNotLoggedIn';

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
};

export default Home;
