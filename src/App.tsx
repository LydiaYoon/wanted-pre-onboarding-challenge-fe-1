import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthTemplate from './page/ AuthTemplate';
import TodoTemplate from './page/TodoTemplate';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="contents">
        <Routes>
          <Route path="/" element={<Navigate replace to="/todos" />} />

          <Route path="/auth/*" element={<AuthTemplate />} />
          <Route path="/todos" element={<TodoTemplate />} />
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
