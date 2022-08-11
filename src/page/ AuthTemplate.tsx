import React, { useEffect } from 'react';
import Header from '../components/common/Header';
import Signin from '../components/auth/Signin';
import Signup from '../components/auth/Signup';
import styled from 'styled-components';

const AuthTemplate = ({ path }: { path: string }) => {
  const authToken = window.localStorage.getItem('authToken');

  useEffect(() => {
    console.log(authToken);
    if (authToken) {
      // TODO: 로그인 페이지 접근시 로컬 스토리지 토큰 유무 체크
      // 토큰이 존재한다면 루트 경로(=투두리스트)로 리다이렉트
    }
  }, [authToken]);

  return (
    <AuthContainer>
      <Header title="Authentication" />
      {path == 'signin' && <Signin />}
      {path == 'signup' && <Signup />}
    </AuthContainer>
  );
};

export default AuthTemplate;

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 512px;
  height: 90%;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.05);

  h3 {
    padding: 18px 0;
    font-size: 21px;
    font-weight: bold;
    color: #495057;
  }

  p {
    margin: 2px 0 18px 0;
  }

  input {
    margin: 4px 0 14px 0;
  }

  .auth-form-wrapper {
    padding: 20px 32px;
    display: flex;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;
