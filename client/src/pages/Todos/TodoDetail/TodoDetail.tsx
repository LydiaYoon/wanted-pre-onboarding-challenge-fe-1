import dayjs from 'dayjs';
import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { TodoData } from '../../../api/todo/todoApi';
import { TodoDetailContainer, TodoDetailWrapper } from './TodoDetail.style';

const TodoDetail = ({ title, content, id, createdAt, updatedAt }: TodoData) => {
  const onClickUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: 투두리스트 Update
  };

  const onClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: 투두리스트 Delete
    // TODO: 삭제하기전에 한 번 더 확인 (파괴적 버튼)
  };

  return (
    <TodoDetailContainer>
      <TodoDetailWrapper>
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <ul>
          <li>
            <div>id</div>
            <div>{id}</div>
          </li>
          <li>
            <div>created at</div>
            <div>{dayjs(createdAt).format('YYYY-MM-DD HH:mm:ss')}</div>
          </li>
          <li>
            <div>updated at</div>
            <div>{dayjs(updatedAt).format('YYYY-MM-DD HH:mm:ss')}</div>
          </li>
        </ul>
      </TodoDetailWrapper>
      <button type="submit" onClick={onClickUpdate}>
        Update <MdEdit />
      </button>
      <button type="reset" className="error" onClick={onClickDelete}>
        Delete <MdDelete />
      </button>
    </TodoDetailContainer>
  );
};

export default TodoDetail;
