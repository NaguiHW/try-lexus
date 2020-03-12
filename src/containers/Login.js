import React from 'react';
import NavbarHome from './NavbarHome';
import LoginForm from '../components/LoginForm';
import './Login.scss';

const Login = () => (
  <div className="container-2">
    <NavbarHome text1="Home" path1="/" text2="Sign Up" path2="/signup" />
    <LoginForm />
  </div>
);

export default Login;
