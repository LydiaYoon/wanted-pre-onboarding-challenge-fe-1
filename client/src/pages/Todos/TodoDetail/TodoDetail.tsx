import dayjs from 'dayjs';
import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { TodoData } from '../../../api/todoApi';
import { openModal } from '../../../modules/layout';
import { useDeleteTodo } from '../hooks/useDeleteTodo';
import TodoCreate from '../TodoCreate/TodoCreate';
import { TodoDetailContainer, TodoDetailWrapper } from './TodoDetail.style';

const TodoDetail = ({ title, content, id, createdAt, updatedAt }: TodoData) => {
  const dispatch = useDispatch();

  const authToken = JSON.parse(localStorage.getItem('authToken') as string);
  const deleteMutate = useDeleteTodo();

  const onClickUpdate = () => {
    dispatch(openModal({ isOpen: true, element: <TodoCreate id={id} /> }));
  };

  const onClickDelete = () => {
    if (confirm('정말로 삭제하시겠습니까?')) {
      deleteMutate({ id, authToken: authToken.token });
    }
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
      <button type="submit" className="success" onClick={onClickUpdate}>
        Update <MdEdit />
      </button>
      <button type="reset" className="error" onClick={onClickDelete}>
        Delete <MdDelete />
      </button>
    </TodoDetailContainer>
  );
};

export default TodoDetail;
