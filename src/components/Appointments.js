import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LOAD_APPOINTMENTS } from '../actions';

class Appointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
    };
  }

  componentDidMount() {
    const { loadAppointments, userID } = this.props;
    loadAppointments(userID);
  }

  componentDidUpdate(prevProps) {
    const { appointments } = this.props;
    if (prevProps.appointments !== appointments) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        appointments,
      });
    }
  }

  render() {
    const { appointments } = this.state;
    return (
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
  }
}

Appointments.propTypes = {
  appointments: PropTypes.oneOfType([PropTypes.any]).isRequired,
  userID: PropTypes.number.isRequired,
  loadAppointments: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appointments: state.appointment.appointments,
  userID: state.user.user.id,
});

const mapDispatchToProps = dispatch => ({
  loadAppointments: id => dispatch(LOAD_APPOINTMENTS(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
