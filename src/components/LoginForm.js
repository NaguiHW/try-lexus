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
      <form>
        <input type="text" placeholder="Email" name="email" value={email} onClick={this.handleChange.bind(this)} />
        <br />
        <input type="password" placeholder="Password" name="password" value={password} onClick={this.handleChange.bind(this)} />
        <br />
        <button type="submit">Log In</button>
      </form>
    );
  }
}

export default LoginForm;
