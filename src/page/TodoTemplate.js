import React from 'react';
import TodoCreate from '../components/todo/TodoCreate';
import TodoHeader from '../components/todo/TodoHeader';
import TodoList from '../components/todo/TodoList';
import '../styles/todo.css';

const TodoTemplate = () => {
  return (
    <div className="todo-container">
      <TodoHeader />
      <TodoList />
      <TodoCreate />
    </div>
  );
};

export default TodoTemplate;
