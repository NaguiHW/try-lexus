import React from 'react';
import PropTypes from 'prop-types';

const ShowCars = ({ type, cars, handleClick }) => (
  <div className="content">
    <div className="selection-head">
      <div className="title">{type}</div>
      <div className="subtitle">Please select a Lexus Model</div>
      <div className="dots" />
    </div>
    <div className="selection-content">
      {
        cars.map(car => (
          <div className="car" key={car.id} id={car.id}>
            <img src={car.image} alt={car.name} onClick={handleClick} role="presentation" />
            <div className="car-name">{car.name}</div>
            <div className="dots" />
            <div className="car-description">{car.description}</div>
            <div className="social-media-area">
              <i className="fab fa-facebook-f" />
              <i className="fab fa-twitter" />
              <i className="fab fa-instagram" />
            </div>
          </div>
        ))
      }
    </div>
  </div>
);

ShowCars.propTypes = {
  type: PropTypes.string.isRequired,
  cars: PropTypes.oneOfType([PropTypes.any]).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ShowCars;
