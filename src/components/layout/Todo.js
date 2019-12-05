import React, { Fragment } from 'react';

const Todo = () => {
  const onClick = () => {
    console.log('you clicked me');
    
  };

  return (
    <Fragment>
      <div>
        <div className="todo_items-area">
          <div>
            <input type="checkbox" />{' '}
            <span>Getting an invite from decagon</span>
          </div>
          <i className="fas fa-ellipsis-h" onClick={onClick}></i>
        </div>
        <div className="cta-task">
          <span>
            <button className="btn btn-secondary btn-sm">Edit</button>
          </span>{' '}
          <span>
            <button className="btn btn-primary btn-sm">Delete</button>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
