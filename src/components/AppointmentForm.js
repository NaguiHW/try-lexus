import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BOOK_APPOINTMENT } from '../actions';

class AppointmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      car_id: null,
      date: '',
      city: 'Chorrera',
    };
    this.cities = ['Chorrera', 'Colon', 'David', 'Panama', 'Santiago'];
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
    });
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
      <div className="appointment-form">
        <div>BOOK A LEXUS TEST-DRIVE</div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="name">
            User Name:
            <br />
            <input type="text" disabled value={appointmentData.user_name} id="name" />
          </label>
          <br />
          <label htmlFor="car-name">
            Selected Car:
            <br />
            <input type="text" disabled value={appointmentData.car_name} id="car-name" />
          </label>
          <br />
          <label htmlFor="date">
            Select a Date:
            <br />
            <input type="date" id="date" onChange={this.handleChange.bind(this)} name="date" value={date} />
          </label>
          <br />
          <label htmlFor="city">
            Select a City:
            <br />
            <select id="cities" onChange={this.handleChange.bind(this)} name="city" value={city}>
              {this.cities.map(city => (
                <option value={city} key={city}>{city}</option>
              ))}
            </select>
          </label>
          <br />
          <button type="submit">Book Now</button>
        </form>
      </div>
    );
  }
}

AppointmentForm.propTypes = {
  appointmentData: PropTypes.oneOfType([PropTypes.any]).isRequired,
  bookAppointment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  appointmentData: state.appointment,
});

const mapDispatchToProps = dispatch => ({
  bookAppointment: bookData => dispatch(BOOK_APPOINTMENT(bookData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentForm);
