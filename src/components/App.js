import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomeConnected from '../containers/HomeConnected';
import HomeNotConnected from '../containers/HomeNotConnected';
import { CHECK_STATUS, LOGOUT } from '../actions';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      status: 'NOT_CONNECTED',
    };
    this.checkStatus = this.checkStatus.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    const { checkStatus } = this.props;
    checkStatus();
  }

  componentDidUpdate(prevProps) {
    const { status } = this.props;
    if (prevProps.status !== status) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        status,
      });
    }
  }

  handleLogout() {
    const { logout } = this.props;
    logout();
  }

  checkStatus() {
    const { status } = this.state;
    if (status === 'CONNECTED') {
      return (
        <HomeConnected handleClick={this.handleLogout} />
      );
    }
    return (
      <HomeNotConnected />
    );
  }

  render() {
    return (
      <>
        {this.checkStatus()}
      </>
    );
  }
}

App.propTypes = {
  checkStatus: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  status: state.user.status,
});

const mapDispatchToProps = dispatch => ({
  checkStatus: () => dispatch(CHECK_STATUS()),
  logout: () => dispatch(LOGOUT()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
