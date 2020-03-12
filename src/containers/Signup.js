import React from 'react';
import NavbarHome from './NavbarHome';
import SignupForm from '../components/SignupForm';
import './Signup.scss';

const Signup = () => (
  <div className="container-3">
    <NavbarHome text1="Home" path1="/" text2="Log In" path2="/login" />
    <SignupForm />
  </div>
);

export default Signup;
