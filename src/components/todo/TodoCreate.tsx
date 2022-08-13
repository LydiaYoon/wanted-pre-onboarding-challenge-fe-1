import React from 'react';
import styled from 'styled-components';

const TodoCreate = () => {
  // TODO: 투두리스트 Create
  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    console.log(form.get('title'));
    console.log(form.get('content'));
    // console.log('투두 생성 API 호출');
  };

  return (
    <TodoCreateContainer>
      <TodoFormWrapper onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Title" autoFocus />
        <textarea name="content" placeholder="Content" />
        <button type="submit" className="success">
          Submit
        </button>
        <button type="reset" className="error">
          Reset
        </button>
      </TodoFormWrapper>
    </TodoCreateContainer>
  );
};

export default TodoCreate;

const TodoCreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
`;

const TodoFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;

  input {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    font-size: 18px;
    box-sizing: border-box;
  }

  textarea {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    height: 100%;
    font-size: 18px;
    box-sizing: border-box;
    resize: none;
  }
`;
