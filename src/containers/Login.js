import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavbarHome from './NavbarHome';
import LoginForm from '../components/LoginForm';
import './Login.scss';

class Login extends Component {
  componentDidUpdate(prevProps) {
    const { status, history } = this.props;
    if (prevProps.status !== status) {
      history.push('/');
    }
  }

  render() {
    return (
      <div className="container-2">
        <NavbarHome text1="Home" path1="/" text2="Sign Up" path2="/signup" />
        <LoginForm />
      </div>
    );
  }
}

Login.propTypes = {
  status: PropTypes.string.isRequired,
  history: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default Login;
