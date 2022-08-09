import React from 'react';
import { useState } from 'react';

const TodoItem = ({ id, title, content }) => {
  const [open, setOpen] = useState(false);

  const onClickTitle = () => {
    setOpen(!open);
  };

  const onClickModify = e => {
    console.log('modify');
  };

  const onClickDelete = e => {
    console.log('delete');
  };

  return (
    <li className="todo-item-wrapper">
      <div className="todo-item" data-id={id}>
        <div className="todo-item-header">
          <div className="todo-item-title" onClick={onClickTitle}>
            {title}
          </div>
          <button className="todo-item-modify" onClick={onClickModify}>
            #
          </button>
          <button className="todo-item-delete error" onClick={onClickDelete}>
            X
          </button>
        </div>
        {open && <div className="todo-item-content">{content}</div>}
      </div>
    </li>
  );
};

export default TodoItem;
