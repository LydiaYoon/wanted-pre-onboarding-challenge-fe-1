import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import * as layoutActions from '../../modules/layout/actions';
import * as todoActions from '../../modules/todo/actions';
import { RootState } from '../../modules';
import TodoItem from './TodoItem';
import TodoDetail from './TodoDetail';
import styled from 'styled-components';
import { PAGE } from '../../enums/commonEnum';

const TodoList = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.auth.user.data);
  const { todoList } = useSelector((state: RootState) => state.todo);
  const navigate = useNavigate();

  const handleClick = (index: number, id: string) => {
    if (userData && userData.token) {
      dispatch(todoActions.getTodoByIdAsync.request({ id, authToken: userData.token }));

      navigate(`${PAGE.TODO_LIST}?id=${id}`);
      dispatch(layoutActions.openModal({ isOpen: true, element: <TodoDetail /> }));
    }
  };

  return (
    <TodoListContainer>
      {todoList.data &&
        todoList.data.length > 0 &&
        todoList.data.map((todo, index) => (
          <TodoItem key={todo.id} index={index} id={todo.id} title={todo.title} handleClick={handleClick} />
        ))}
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.ul`
  flex: 1;
  padding: 20px 32px;
  overflow-y: auto;
`;
