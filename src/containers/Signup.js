import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavbarHome from './NavbarHome';
import SignupForm from '../components/SignupForm';
import './Signup.scss';

class Signup extends Component {
  componentDidUpdate(prevProps) {
    const { status, history } = this.props;
    if (prevProps.status !== status) {
      history.push('/');
    }
  }

  render() {
    return (
      <div className="container-3">
        <NavbarHome text1="Home" path1="/" text2="Log In" path2="/login" />
        <SignupForm />
      </div>
    );
  }
}

Signup.propTypes = {
  status: PropTypes.string.isRequired,
  history: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default Signup;
