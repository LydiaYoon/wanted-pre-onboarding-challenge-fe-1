import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import * as todoActions from '../../modules/todo/actions';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector(state => state.todo);

  const authToken = window.localStorage.getItem('authToken');

  useEffect(() => {
    console.log(authToken);
    if (authToken) {
      dispatch(todoActions.getTodos(authToken));
    }
  }, [authToken]);

  return (
    <ul className="todo-list-container">
      {todoList.data &&
        todoList.data.length > 0 &&
        todoList.data.map(todo => <TodoItem key={todo.id} id={todo.id} title={todo.title} content={todo.content} />)}
    </ul>
  );
};

export default TodoList;
