import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_CAR, ADD_DATA_APPOINTMENT } from '../actions';
import ShowCar from '../components/ShowCar';

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {},
    };
    this.makeAppointment = this.makeAppointment.bind(this);
  }

  componentDidMount() {
    const { getCar, id } = this.props;
    getCar(id);
  }

  componentDidUpdate(prevProps) {
    const { car } = this.props;
    if (prevProps.car !== car) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        car: car[0],
      });
    }
  }

  makeAppointment(e) {
    const {
      handleClick, addDataAppointment, user, car,
    } = this.props;
    handleClick(e);
    addDataAppointment(user, car[0]);
  }

  render() {
    const { car } = this.state;
    return (
      <ShowCar car={car} makeAppointment={this.makeAppointment} />
    );
  }
}

Car.propTypes = {
  id: PropTypes.string.isRequired,
  getCar: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  addDataAppointment: PropTypes.func.isRequired,
  car: PropTypes.oneOfType([PropTypes.any]).isRequired,
  user: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

const mapStateToProps = state => ({
  car: state.car.car,
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
  getCar: type => dispatch(GET_CAR(type)),
  addDataAppointment: (user, car) => dispatch(ADD_DATA_APPOINTMENT(user, car)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Car);
