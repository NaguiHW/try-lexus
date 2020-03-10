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
      <div>
        <h1>
          Home status:
          {' '}
          {status}
          <br />
          (Not Connected)
        </h1>
      </div>
    );
  };

  return (
    <div>
      { renderHome() }
    </div>
  );
};

Home.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Home;
