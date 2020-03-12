import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LOGIN } from '../actions/index';

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

  handleSubmit(e) {
    e.preventDefault();
    const { login } = this.props;
    login(this.state);
  }

  render() {
    const { email, password } = this.state;
    return (
      <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
        <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleChange.bind(this)} />
        <br />
        <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange.bind(this)} />
        <br />
        <button type="submit">Log In</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  login: userData => dispatch(LOGIN(userData)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
