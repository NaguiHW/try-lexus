import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_CARS } from '../actions';

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
    const { type } = this.props;
    const { cars } = this.state;
    return (
      <div className="content">
        <div className="selection-head">
          <div className="title">{type}</div>
          <div className="subtitle">Please select a Lexus Model</div>
          <div className="dots" />
        </div>
        <div className="selection-content">
          {
            cars.map(car => (
              <div className="car" key={car.id}>
                <img src={car.image} alt={car.name} />
                <div className="car-name">{car.name}</div>
                <div className="dots" />
                <div className="car-description">{car.description}</div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

Cars.propTypes = {
  type: PropTypes.string.isRequired,
  getCars: PropTypes.func.isRequired,
  cars: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

const mapStateToProps = state => ({
  cars: state.car.cars,
});

const mapDispatchToProps = dispatch => ({
  getCars: type => dispatch(GET_CARS(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
