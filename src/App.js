import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SigninTemplate from './page/SigninTemplate';
import SignupTemplate from './page/SignupTemplate';
import TodoTemplate from './page/TodoTemplate';
import GlobalStyle from './styles/GlobalStyle';
// import './styles/common.css';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="contents">
        <Routes>
          <Route path="/" element={<Navigate replace to="/signup" />} />
          <Route path="/signin" element={<SigninTemplate />} />
          <Route path="/signup" element={<SignupTemplate />} />
          <Route path="/todo" element={<TodoTemplate />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

// pages : 페이지
// components : 페이지에 들어가는 개별 컴포넌트
// layouts : 페이지에 들어가는 공통 레이아웃 (header, footer)
// hooks : 커스텀 훅
// utils : 기타 함수
