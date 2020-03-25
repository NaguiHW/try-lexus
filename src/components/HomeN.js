import React from 'react';
import PropTypes from 'prop-types';
import './HomeN.scss';

const HomeN = ({ handleClick }) => (
  <div className="main-content">
    <div className="main-text">EXPERIENCE THE LEXUS</div>
    <button type="button" className="main-button" onClick={handleClick}>Create an Account</button>
  </div>
);

HomeN.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default HomeN;
