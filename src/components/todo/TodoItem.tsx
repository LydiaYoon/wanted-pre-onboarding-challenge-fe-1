import React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdEdit, MdDelete } from 'react-icons/md';

type TodoItemProps = {
  index: number;
  id: string;
  title: string;
  content: string;
  expanded: number | null;
  handleChange: (index: number) => void;
};

const TodoItem = ({ index, id, title, content, expanded, handleChange }: TodoItemProps) => {
  const [done, setDone] = useState<boolean>(index % 2 == 0);
  const onToggle = () => setDone(!done);

  const onClickUpdate = (event: React.MouseEvent<HTMLDivElement>) => {
    // TODO: 투두리스트 Update
    console.log('update');
    console.log(event.target);
  };

  const onClickDelete = (event: React.MouseEvent<HTMLDivElement>) => {
    // TODO: 투두리스트 Delete
    console.log('delete');
    console.log(event.target);
  };

  return (
    <TodoItemWrapper>
      <div className="row">
        <div className="left">
          <CheckCircle done={done} onClick={onToggle}>
            {done && <MdDone />}
          </CheckCircle>
        </div>
        <div className="right">
          <TodoItemTitle done={done} onClick={() => handleChange(index)}>
            {title}
          </TodoItemTitle>
        </div>
      </div>
      <div className="row">
        <div className="left" />
        <div className="right">
          {expanded === index && (
            <TodoItemContent>
              {content}
              {content}
              {content}

              <div className="row" style={{ justifyContent: 'flex-end' }}>
                <Update onClick={onClickUpdate}>
                  <MdEdit />
                </Update>
                <Delete onClick={onClickDelete}>
                  <MdDelete />
                </Delete>
              </div>
            </TodoItemContent>
          )}
        </div>
      </div>
    </TodoItemWrapper>
  );
};

export default TodoItem;

const TodoItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  padding: 12px 0;

  .row {
    display: flex;
    align-items: center;

    .left {
      flex: 1;
    }

    .right {
      flex: 8;
      display: flex;
      flex-direction: column;
      color: #495057;
      line-height: initial;
      word-break: break-all;
    }
  }
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

const TodoItemContent = styled.div`
  padding-top: 12px;
  line-height: initial;
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

const Update = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 14px;
  color: #6b6bff;
  font-size: 24px;
  // background: #eee;
  cursor: pointer;
`;

const Delete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  // color: #dee2e6;
  color: #ff6b6b;
  font-size: 24px;
  // background: #eee;
  cursor: pointer;
`;
