import React, { useState } from 'react';

const TodoCreate = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };

  const onChangeContent = e => {
    setContent(e.target.value);
  };

  return (
    <div className="todo-create-container">
      <form className="todo-create-form">
        <div className="todo-form-header">
          <input
            className="todo-form-title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
            autoFocus
          />
          <button className="todo-form-create success">+</button>
        </div>
        <textarea className="todo-form-content" placeholder="Content" value={content} onChange={onChangeContent} />
      </form>
    </div>
  );
};

export default TodoCreate;
