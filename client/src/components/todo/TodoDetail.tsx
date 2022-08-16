import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { MdEdit, MdDelete } from 'react-icons/md';

const TodoDetail = () => {
  const userData = useSelector((state: RootState) => state.auth.user.data);
  const { todoDetail } = useSelector((state: RootState) => state.todo);

  const onClickUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: 투두리스트 Update
    console.log('update');
    // console.log(event.target);
  };

  const onClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: 투두리스트 Delete
    // TODO: 삭제하기전에 alert으로 한 번 더 확인
    console.log('delete');
    // console.log(event.target);
  };

  return (
    todoDetail &&
    todoDetail.data && (
      <TodoDetailContainer>
        <TodoDetailWrapper>
          <div>
            <div className="title">{todoDetail.data.title}</div>
            <div className="content">{todoDetail.data.content}</div>
            <ul>
              <li>
                <div>id</div>
                <div>{todoDetail.data.id}</div>
              </li>
              <li>
                <div>created at</div>
                <div>{dayjs(todoDetail.data.createdAt).format('YYYY-MM-DD HH:mm:ss')}</div>
              </li>
              <li>
                <div>updated at</div>
                <div>{dayjs(todoDetail.data.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</div>
              </li>
            </ul>
          </div>
        </TodoDetailWrapper>
        <button type="submit" onClick={onClickUpdate}>
          Update <MdEdit />
        </button>
        <button type="reset" className="error" onClick={onClickDelete}>
          Delete <MdDelete />
        </button>
      </TodoDetailContainer>
    )
  );
};

export default TodoDetail;

const TodoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  line-height: initial;
  word-break: break-all;

  .title {
    padding-bottom: 12px;
    font-size: 21px;
  }

  .content {
    padding-bottom: 36px;
  }

  li {
    display: flex;
    justify-content: space-between;
  }

  li div:last-child {
    color: #888;
  }

  .label {
    font-weight: bold;
  }
`;

const TodoDetailWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
`;
