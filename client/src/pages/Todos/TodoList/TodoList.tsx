import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import * as layoutActions from '../../../modules/layout/actions';
import { useGetTodos } from '../api/useGetTodos';
import TodoDetail from '../TodoDetail/TodoDetail';
import TodoItem from '../TodoItem/TodoItem';
import TodoListWrapper from './TodoList.style';

const TodoList = () => {
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();

  const todos = useGetTodos();

  useEffect(() => {
    if (!!todos && !Array.isArray(todos)) {
      dispatch(layoutActions.openModal({ isOpen: true, element: <TodoDetail {...todos} /> }));
    } else {
      dispatch(layoutActions.closeModal());
    }
  }, [todos]);

  const handleClick = (id: string) => {
    setSearchParams({ id: id });
  };

  return (
    <TodoListWrapper>
      {!!todos && Array.isArray(todos) && (
        <>
          {todos?.length === 0 && <div color="error">등록된 할 일이 없습니다</div>}
          {!!todos &&
            todos.length > 0 &&
            todos.map((todo, index) => <TodoItem key={todo.id} index={index} {...todo} handleClick={handleClick} />)}
        </>
      )}
    </TodoListWrapper>
  );
};

export default TodoList;
