import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_CARS } from '../actions';
import ShowCars from '../components/ShowCars';

class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }

  componentDidMount() {
    const { getCars, type } = this.props;
    getCars(type);
  }

  componentDidUpdate(prevProps) {
    const { cars, type, getCars } = this.props;
    if (prevProps.cars !== cars) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        cars,
      });
    }
    if (prevProps.type !== type) {
      getCars(type);
    }
  }

  render() {
    const { type, handleClick } = this.props;
    const { cars } = this.state;
    return (
      <ShowCars type={type} cars={cars} handleClick={handleClick} />
    );
  }
}

Cars.propTypes = {
  type: PropTypes.string.isRequired,
  getCars: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  cars: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

const mapStateToProps = state => ({
  cars: state.car.cars,
});

const mapDispatchToProps = dispatch => ({
  getCars: type => dispatch(GET_CARS(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
