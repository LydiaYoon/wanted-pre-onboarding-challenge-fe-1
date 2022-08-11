import React, { useState } from 'react';
import styled from 'styled-components';

const TodoCreate = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  // TODO: 투두리스트 Create

  return (
    <TodoCreateContainer>
      <TodoFormWrapper>
        <div className="header">
          <input className="title" type="text" placeholder="Title" value={title} onChange={onChangeTitle} autoFocus />
          <button className="success">+</button>
        </div>
        <textarea className="content" placeholder="Content" value={content} onChange={onChangeContent} />
      </TodoFormWrapper>
    </TodoCreateContainer>
  );
};

export default TodoCreate;

const TodoCreateContainer = styled.div`
  display: flex;
  padding: 20px 32px;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const TodoFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .header {
    display: flex;

    input.title {
      padding: 12px;
      border-radius: 4px;
      border: 1px solid #dee2e6;
      width: 100%;
      font-size: 18px;
      box-sizing: border-box;
    }
  }

  .content {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    height: 150px;
    font-size: 18px;
    box-sizing: border-box;
    resize: none;
  }
`;
