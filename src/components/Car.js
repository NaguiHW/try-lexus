import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_CAR } from '../actions';

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {},
    };
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
    const { handleClick } = this.props;
    handleClick(e);
  }

  render() {
    const { car } = this.state;
    return (
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
          <button type="button" onClick={this.makeAppointment.bind(this)} id="CREATE-APPONITMETNT">Make an Appointment</button>
        </div>
      </div>
    );
  }
}

Car.propTypes = {
  id: PropTypes.string.isRequired,
  getCar: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  car: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

const mapStateToProps = state => ({
  car: state.car.car,
});

const mapDispatchToProps = dispatch => ({
  getCar: type => dispatch(GET_CAR(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Car);
