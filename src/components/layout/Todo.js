import React, { Fragment, useState } from 'react';

const Todo = ({ todo }) => {
  const [toggleAction, setToggleAction] = useState(false);
  const onClick = () => {
    setToggleAction(prev => !prev);
  };

  return (
    <Fragment>
      <div>
        <div className="todo_items-area">
          <div>
            <input type="checkbox" id="todo"/>
            {" "}<label htmlFor="todo">{todo.description}</label> 
          </div>
          <i className="fas fa-ellipsis-h" onClick={onClick}></i>
        </div>

        {toggleAction && (
          <div className="cta-task">
            <span>
              <button className="btn btn-secondary btn-xm" title="edit">
                Edit
              </button>
            </span>{' '}
            <span>
              <button className="btn btn-primary btn-xm" title="delete">
                Delete
              </button>
            </span>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Todo;
