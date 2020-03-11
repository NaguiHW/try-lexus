import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from '../containers/Home';

class App extends Component {
  componentDidMount() {
    console.log(this.props.status);
  }

  render() {
    const { status } = this.props;
    return (
      <Router>
        <Switch>
          <Route path="/" render={() => <Home status={status} />} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  status: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  status: state.user.status,
});

export default connect(mapStateToProps)(App);
