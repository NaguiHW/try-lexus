import React from 'react';
import NavbarHome from './NavbarHome';
import LoginForm from '../components/LoginForm';
import './Login.scss';

const Login = () => (
  <div className="container-2">
    <NavbarHome />
    <LoginForm />
  </div>
);

export default Login;
