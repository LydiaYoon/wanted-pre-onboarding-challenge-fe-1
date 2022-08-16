import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import * as layoutActions from '../modules/layout/actions';
import * as todoActions from '../modules/todo/actions';
import Header from '../components/common/Header';
import TodoList from '../components/todo/TodoList';
import TodoCreate from '../components/todo/TodoCreate';
import FloatingButton from '../components/common/FloatingButton';
import styled from 'styled-components';
import { PAGE } from '../enums/commonEnum';

const TodoTemplate = () => {
  const authToken = localStorage.getItem('authToken');
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(layoutActions.setPage(PAGE.TODO_LIST));
    dispatch(layoutActions.setHeaderTitle('TO DO LIST'));

    const id = searchParams.get('id');
    console.log(id);
  }, []);

  useEffect(() => {
    if (authToken) {
      // TODO: 투두리스트 페이지 접근시 로컬 스토리지 토큰 유효성 체크
      // 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트
      // dispatch(authActions.setAuthToken(authToken));
      dispatch(todoActions.getTodosAsync.request(authToken));
    }
  }, [authToken]);

  const onClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(layoutActions.openModal({ isOpen: true, element: <TodoCreate /> }));
  };

  return (
    <>
      <TodoContainer>
        <Header />
        <TodoList />
      </TodoContainer>
      <Link to={PAGE.SIGN_IN}>로그아웃</Link>
      <FloatingButton handleClick={onClickButton} />
    </>
  );
};

export default TodoTemplate;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 512px;
  height: 90%;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.05);
`;
