import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form className="login-form">
        <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleChange.bind(this)} />
        <br />
        <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange.bind(this)} />
        <br />
        <button type="submit">Log In</button>
      </form>
    );
  }
}

export default LoginForm;
