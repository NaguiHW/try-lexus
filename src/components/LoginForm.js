import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.scss';

const LoginForm = ({
  email, password, handleSubmit, handleChange,
}) => (
  <>
    <form className="login-form" onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange} />
      <br />
      <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
      <br />
      <button type="submit">Log In</button>
    </form>
    <div className="error-message" />
  </>
);

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LoginForm;
