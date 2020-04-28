import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LOAD_APPOINTMENTS } from '../actions';
import ShowAppointments from '../components/ShowAppointments';

class Appointments extends Component {
  componentDidMount() {
    const { userID, loadAppointments } = this.props;
    loadAppointments(userID);
  }

  render() {
    const { appointments } = this.props;
    return (
      <ShowAppointments appointments={appointments} />
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
