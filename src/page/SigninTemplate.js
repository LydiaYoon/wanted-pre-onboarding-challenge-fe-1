import React from 'react';
import { useSelector } from 'react-redux';
import AuthHeader from '../components/auth/AuthHeader';
import Signin from '../components/auth/Signin';
import '../styles/auth.css';

const SigninTemplate = () => {
  const { data, loading } = useSelector(state => state.auth.user);

  return (
    <div className="auth-container">
      <AuthHeader />
      <Signin />
    </div>
  );
};

export default SigninTemplate;
