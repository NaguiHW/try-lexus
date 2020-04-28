import React from 'react';
import PropTypes from 'prop-types';

const SignupForm = ({
  firstName, lastName, email, password, passwordConfirmation, handleChange, handleSubmit,
}) => (
  <form className="login-form" onSubmit={handleSubmit}>
    <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={handleChange} />
    <br />
    <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={handleChange} />
    <br />
    <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange} />
    <br />
    <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
    <br />
    <input type="password" placeholder="Password Confirmation" name="passwordConfirmation" value={passwordConfirmation} onChange={handleChange} />
    <br />
    <button type="submit">Create Account</button>
    <div className="error-message" />
  </form>
);

SignupForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SignupForm;
