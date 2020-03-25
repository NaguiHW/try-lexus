import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LOGIN, RESET_ERROR } from '../actions';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { errorMessage, resetError } = this.props;
    if (prevProps.errorMessage !== errorMessage) {
      const message = document.getElementsByClassName('error-message');
      message[0].innerHTML = errorMessage;
      setTimeout(() => resetError(), 3000);
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { login } = this.props;
    login(this.state);
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleChange.bind(this)} />
          <br />
          <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange.bind(this)} />
          <br />
          <button type="submit">Log In</button>
        </form>
        <div className="error-message" />
      </>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  resetError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errorMessage: state.user.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  login: userData => dispatch(LOGIN(userData)),
  resetError: () => dispatch(RESET_ERROR()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
