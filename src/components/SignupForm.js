import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CREATE_ACCOUNT } from '../actions';

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
      </form>
    );
  }
}

SignupForm.propTypes = {
  createAccount: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createAccount: userData => dispatch(CREATE_ACCOUNT(userData)),
});

export default connect(null, mapDispatchToProps)(SignupForm);
