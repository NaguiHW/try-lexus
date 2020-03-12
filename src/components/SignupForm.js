import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CREATE_ACCOUNT, RESET_ERROR } from '../actions';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
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
    const { createAccount } = this.props;
    createAccount(this.state);
  }

  render() {
    const {
      firstName, lastName, email, password, passwordConfirmation,
    } = this.state;
    return (
      <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={this.handleChange.bind(this)} />
        <br />
        <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={this.handleChange.bind(this)} />
        <br />
        <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleChange.bind(this)} />
        <br />
        <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange.bind(this)} />
        <br />
        <input type="password" placeholder="Password Confirmation" name="passwordConfirmation" value={passwordConfirmation} onChange={this.handleChange.bind(this)} />
        <br />
        <button type="submit">Create Account</button>
        <div className="error-message" />
      </form>
    );
  }
}

SignupForm.propTypes = {
  createAccount: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  resetError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errorMessage: state.user.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  createAccount: userData => dispatch(CREATE_ACCOUNT(userData)),
  resetError: () => dispatch(RESET_ERROR()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
