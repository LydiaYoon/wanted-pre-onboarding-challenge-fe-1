import { useNavigate } from 'react-router';
import { PAGE } from '../../../enums/commonEnum';
import { useGetTodos } from '../api/useGetTodos';
import TodoItem from '../TodoItem/TodoItem';
import TodoListWrapper from './TodoList.style';

const TodoList = () => {
  const navigate = useNavigate();

  const todos = useGetTodos();

  const handleClick = (index: number, id: string) => {
    navigate(`${PAGE.TODO_LIST}?id=${id}`);
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
