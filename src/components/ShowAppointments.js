import React from 'react';
import PropTypes from 'prop-types';

const ShowAppointments = ({ appointments }) => (
  <div className="appointment-page">
    <div className="title">APPOINTMENTS</div>
    <div className="dots" />
    <div className="all-appointments">
      <div className="row-head">
        <div>Car Model</div>
        <div>Date</div>
        <div>City</div>
      </div>
      {
        appointments.map(appointment => (
          <div key={appointment.id} className="row">
            <div className="data">{appointment.car_name}</div>
            <div className="data">{new Date(appointment.date).toLocaleDateString()}</div>
            <div className="data">{appointment.city}</div>
          </div>
        ))
      }
      <div className="message">
        To book an appointment, select a car and click on
        {' '}
        <i>Book an Appointment</i>
      </div>
    </div>
  </div>
);

ShowAppointments.propTypes = {
  appointments: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default ShowAppointments;
