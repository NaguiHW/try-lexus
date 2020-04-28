import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BOOK_APPOINTMENT } from '../actions';
import ShowAppointmentForm from '../components/ShowAppointmentForm';

class AppointmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      car_id: null,
      date: '',
      city: 'Chorrera',
      car_name: '',
    };
    this.cities = ['Chorrera', 'Colon', 'David', 'Panama', 'Santiago'];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { appointmentData } = this.props;
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    const year = today.getFullYear();
    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }
    this.setState({
      user_id: appointmentData.user_id,
      car_id: appointmentData.car_id,
      date: `${year}-${month}-${day}`,
      car_name: appointmentData.car_name,
    });
  }

  componentDidUpdate(prevProps) {
    const { appointmentStatus, handleClick } = this.props;
    if (prevProps.appointmentStatus !== appointmentStatus) {
      handleClick();
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { bookAppointment } = this.props;
    bookAppointment(this.state);
  }

  render() {
    const { appointmentData } = this.props;
    const { date, city } = this.state;
    return (
      <ShowAppointmentForm
        date={date}
        city={city}
        cities={this.cities}
        appointmentData={appointmentData}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

AppointmentForm.propTypes = {
  appointmentData: PropTypes.oneOfType([PropTypes.any]).isRequired,
  appointmentStatus: PropTypes.string.isRequired,
  bookAppointment: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appointmentData: state.appointment,
  appointmentStatus: state.appointment.appointmentStatus,
});

const mapDispatchToProps = dispatch => ({
  bookAppointment: bookData => dispatch(BOOK_APPOINTMENT(bookData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentForm);
