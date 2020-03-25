import React from 'react';
import PropTypes from 'prop-types';

const ShowCar = ({ car, makeAppointment }) => (
  <div className="individual-car">
    <div className="car-image">
      <img src={car.image} alt={car.name} />
    </div>
    <div className="car-info-area">
      <div className="car-name">{car.name}</div>
      <div className="price-area">
        <div className="row back-color">
          <div className="text">Due at Signing</div>
          <div className="price-tex">{car.signing}</div>
        </div>
        <div className="row">
          <div className="text">Monthly Fee</div>
          <div className="price-text">{car.month_fee}</div>
        </div>
        <div className="row back-color">
          <div className="text">Lease Cash</div>
          <div className="price-text">{car.lease_cash}</div>
        </div>
        <div className="row">
          <div className="text">Total payable</div>
          <div className="price-text">{car.price}</div>
        </div>
        <div className="row back-color">
          <div className="text">Duration</div>
          <div className="price-text">{car.months}</div>
        </div>
      </div>
      <button type="button" onClick={makeAppointment} id="CREATE-APPONITMETNT">Book an Appointment</button>
    </div>
  </div>
);

ShowCar.propTypes = {
  car: PropTypes.oneOfType([PropTypes.any]).isRequired,
  makeAppointment: PropTypes.func.isRequired,
};

export default ShowCar;
