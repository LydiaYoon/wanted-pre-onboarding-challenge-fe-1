import { useState } from 'react';
import { MdDone } from 'react-icons/md';
import styled, { css } from 'styled-components';

type TodoItemProps = {
  index: number;
  id: string;
  title: string;
  handleClick: (index: number, id: string) => void;
};

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

const TodoItemWrapper = styled.li`
  display: flex;
  padding: 12px 0;

  div:nth-child(1) {
    flex: 1;
    margin-top: 2px;
  }

  div:nth-child(2) {
    flex: 8;
    display: flex;
    line-height: initial;
    word-break: break-all;
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const TodoItemTitle = styled.div<{ done: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  height: 32px;
  color: #495057;
  font-size: 21px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      color: #aaa;
      text-decoration: line-through;
    `}
`;
