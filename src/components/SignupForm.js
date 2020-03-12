import React, { Component } from 'react';

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

  render() {
    const {
      firstName, lastName, email, password, passwordConfirmation,
    } = this.state;
    return (
      <form className="login-form">
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
        <button type="submit">Log In</button>
      </form>
    );
  }
}

export default SignupForm;
