import React from 'react';
import { MdCreate, MdCancel } from 'react-icons/md';
import { TodoCreateContainer, TodoFormWrapper } from './TodoCreate.style';

const TodoCreate = () => {
  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    // TODO: 투두리스트 Create
    // form.get('title');
    // form.get('content');
  };

  return (
    <>
      <TodoCreateContainer>
        <TodoFormWrapper onSubmit={handleSubmit}>
          <input name="title" type="text" placeholder="Title" autoFocus />
          <textarea name="content" placeholder="Content" />
          <button type="submit" className="success">
            Submit <MdCreate />
          </button>
          <button type="reset" className="error">
            Reset <MdCancel />
          </button>
        </TodoFormWrapper>
      </TodoCreateContainer>
    </>
  );
};

export default TodoCreate;
