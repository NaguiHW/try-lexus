/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import { CHECK_STATUS, LOGOUT } from '../actions';

class App extends Component {
  constructor() {
    super();
    this.handleLogot = this.handleLogot.bind(this);
  }

  componentDidMount() {
    const { checkStatus } = this.props;
    checkStatus();
  }

  handleLogot() {
    const { logout } = this.props;
    logout();
  }

  render() {
    const { status } = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home status={status} logout={this.handleLogot} />} />
          <Route path="/login" render={props => <Login {...props} status={status} />} />
          <Route path="/signup" render={props => <Signup {...props} status={status} />} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  status: PropTypes.string.isRequired,
  checkStatus: PropTypes.func.isRequired,
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
