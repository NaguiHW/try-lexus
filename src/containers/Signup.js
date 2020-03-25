import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CREATE_ACCOUNT, RESET_ERROR } from '../actions';
import SignupForm from '../components/SignupForm';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
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
    const { createAccount } = this.props;
    createAccount(this.state);
  }

  render() {
    const {
      firstName, lastName, email, password, passwordConfirmation,
    } = this.state;
    return (
      <SignupForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        passwordConfirmation={passwordConfirmation}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

Signup.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
