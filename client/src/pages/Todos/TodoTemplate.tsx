import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import Header from '../../components/Header/Header';
import { setPage, setHeaderTitle, openModal } from '../../modules/layout';
import { routes } from '../../routes/routes';
import { setSignout } from '../../utils/authUtil';
import TodoCreate from './TodoCreate/TodoCreate';
import TodoList from './TodoList/TodoList';
import TodoContainer from './TodoTemplate.style';

const TodoTemplate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setPage(routes.todos));
    dispatch(setHeaderTitle('TO DO LIST'));
  }, []);

  const onClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(openModal({ isOpen: true, element: <TodoCreate id={null} /> }));
  };

  const onClickSignout = () => {
    setSignout();
    navigate(routes.signin);
    location.reload();
  };

  return (
    <>
      <TodoContainer>
        <Header />
        <TodoList />
        <div className="link">
          <a onClick={onClickSignout}>로그아웃</a>
        </div>
      </TodoContainer>
      <FloatingButton handleClick={onClickButton} />
    </>
  );
};

export default TodoTemplate;
