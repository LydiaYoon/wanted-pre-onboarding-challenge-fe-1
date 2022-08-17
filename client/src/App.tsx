import Modal from './components/common/Modal/Modal';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="contents">
        <Router />
        <Modal />
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
