import { useState } from 'react';
import { MdDone } from 'react-icons/md';
import { TodoData } from '../../../api/todo/todoApi';
import { CheckCircle, TodoItemTitle, TodoItemWrapper } from './TodoItem.style';

interface TodoItemProps extends TodoData {
  index: number;
  handleClick: (index: number, id: string) => void;
}

const TodoItem = ({ index, id, title, handleClick }: TodoItemProps) => {
  const [done, setDone] = useState<boolean>(index % 2 == 0);
  const onToggle = () => setDone(!done);

  return (
    <TodoItemWrapper>
      <div>
        <CheckCircle done={done} onClick={onToggle}>
          {done && <MdDone />}
        </CheckCircle>
      </div>
      <TodoItemTitle done={done} onClick={() => handleClick(index, id)}>
        {title}
      </TodoItemTitle>
    </TodoItemWrapper>
  );
};

export default TodoItem;
