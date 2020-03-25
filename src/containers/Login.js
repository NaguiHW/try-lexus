import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LOGIN, RESET_ERROR } from '../actions';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <LoginForm
        email={email}
        password={password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
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
