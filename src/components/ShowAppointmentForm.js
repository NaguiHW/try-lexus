import React from 'react';
import PropTypes from 'prop-types';

const ShowAppointmentForm = ({
  date, city, cities, appointmentData, handleSubmit, handleChange,
}) => (
  <div className="appointment-form">
    <div className="book-test">BOOK A LEXUS TEST-DRIVE</div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <span>User Name:</span>
        <br />
        <input type="text" disabled value={appointmentData.user_name} id="name" />
      </label>
      <br />
      <label htmlFor="car-name">
        <span>Selected Car:</span>
        <br />
        <input type="text" disabled value={appointmentData.car_name} id="car-name" />
      </label>
      <br />
      <label htmlFor="date">
        <span>Select a Date:</span>
        <br />
        <input type="date" id="date" onChange={handleChange} name="date" value={date} />
      </label>
      <br />
      <label htmlFor="city">
        <span>Select a City:</span>
        <br />
        <select id="cities" onChange={handleChange} name="city" value={city}>
          {cities.map(city => (
            <option value={city} key={city}>{city}</option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Book Now</button>
    </form>
  </div>
);

ShowAppointmentForm.propTypes = {
  date: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  cities: PropTypes.oneOfType([PropTypes.any]).isRequired,
  appointmentData: PropTypes.oneOfType([PropTypes.any]).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ShowAppointmentForm;
