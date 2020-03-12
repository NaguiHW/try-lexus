import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import { CHECK_STATUS } from '../actions';

class App extends Component {
  componentDidMount() {
    const { checkStatus } = this.props;
    checkStatus();
  }

  render() {
    const { status } = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home status={status} />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/signup" render={() => <Signup />} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  status: PropTypes.string.isRequired,
  checkStatus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  status: state.user.status,
});

const mapDispatchToProps = dispatch => ({
  checkStatus: () => dispatch(CHECK_STATUS()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
