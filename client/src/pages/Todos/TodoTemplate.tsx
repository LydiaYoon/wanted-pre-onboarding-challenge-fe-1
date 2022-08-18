import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import FloatingButton from '../../components/common/FloatingButton/FloatingButton';
import Header from '../../components/common/Header/Header';
import { PAGE } from '../../enums/commonEnum';
import * as layoutActions from '../../modules/layout/actions';
import TodoCreate from './TodoCreate/TodoCreate';
import TodoList from './TodoList/TodoList';
import TodoContainer from './TodoTemplate.style';

const TodoTemplate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layoutActions.setPage(PAGE.TODO_LIST));
    dispatch(layoutActions.setHeaderTitle('TO DO LIST'));
  }, []);

  const onClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(layoutActions.openModal({ isOpen: true, element: <TodoCreate /> }));
  };

  // TODO: 로그아웃 처리

  return (
    <>
      <TodoContainer>
        <Header />
        <TodoList />
        <div className="link">
          <Link to={PAGE.SIGN_IN}>로그아웃</Link>
        </div>
      </TodoContainer>
      <FloatingButton handleClick={onClickButton} />
    </>
  );
};

export default TodoTemplate;
