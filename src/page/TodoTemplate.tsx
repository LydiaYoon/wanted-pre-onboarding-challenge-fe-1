import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as layoutActions from '../modules/layout/actions';
import * as todoActions from '../modules/todo/actions';
import Header from '../components/common/Header';
import TodoCreate from '../components/todo/TodoCreate';
import TodoList from '../components/todo/TodoList';
import styled from 'styled-components';
import FloatingButton from '../components/common/FloatingButton';
import { PAGE } from '../enums/commonEnum';

const TodoTemplate = () => {
  const authToken = window.localStorage.getItem('authToken');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layoutActions.setPage(PAGE.TODO_LIST));
    dispatch(layoutActions.setHeaderTitle('TO DO LIST'));
  }, []);

  useEffect(() => {
    console.log(authToken);
    if (authToken) {
      // TODO: 투두리스트 페이지 접근시 로컬 스토리지 토큰 유효성 체크
      // 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트
      dispatch(todoActions.getTodosAsync.request(authToken));
    }
  }, [authToken]);

  return (
    <>
      <TodoContainer>
        <Header />
        <TodoList />
        <TodoCreate />
      </TodoContainer>
      <FloatingButton />
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
