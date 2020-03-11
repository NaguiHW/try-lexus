import React from 'react';
import PropTypes from 'prop-types';
import HomeNotLoggedIn from './HomeNotLoggedIn';

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
