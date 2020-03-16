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

  render() {
    const { car } = this.state;
    return (
      <div>
        Car
        {car.id}
      </div>
    );
  }
}

Car.propTypes = {
  id: PropTypes.string.isRequired,
  getCar: PropTypes.func.isRequired,
  car: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

const mapStateToProps = state => ({
  car: state.car.car,
});

const mapDispatchToProps = dispatch => ({
  getCar: type => dispatch(GET_CAR(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Car);
