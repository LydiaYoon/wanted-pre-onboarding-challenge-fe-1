import Modal from './components/Modal/Modal';
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
