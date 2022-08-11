import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import { RootState } from '../../modules';

const TodoList = () => {
  const { todoList } = useSelector((state: RootState) => state.todo);
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleChange = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <TodoListContainer>
      {todoList.data &&
        todoList.data.length > 0 &&
        todoList.data.map((todo, index) => (
          <TodoItem
            key={todo.id}
            index={index}
            id={todo.id}
            title={todo.title}
            content={todo.content}
            expanded={expanded}
            handleChange={handleChange}
          />
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
