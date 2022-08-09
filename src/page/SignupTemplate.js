import React from 'react';
import { useSelector } from 'react-redux';
import AuthHeader from '../components/auth/AuthHeader';
import Signup from '../components/auth/Signup';
import '../styles/auth.css';

const SignupTemplate = () => {
  const { data, loading } = useSelector(state => state.auth.user);

  return (
    <div className="auth-container">
      <AuthHeader />
      <Signup />
    </div>
  );
};

export default SignupTemplate;
