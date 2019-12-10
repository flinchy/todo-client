import React, { Fragment, useState, useContext } from 'react';
import TodoContext from '../../context/todo/todoContext';
import PropTypes from 'prop-types';
// import menuIcon from '../icons/icon-menu.png';

const Todo = ({ todo }) => {
  const [toggleAction, setToggleAction] = useState(false);
  const todoContext = useContext(TodoContext);

  const { setCurrent, deleteTodo, clearCurrent } = todoContext;

  const onDelete = () => {
    deleteTodo(todo.id);
    clearCurrent();
  };

  const onClick = () => {
    setToggleAction(prev => !prev);
  };

  return (
    <Fragment>
      <div>
        <div className="todo_items-area">
          <div>
            <input type="checkbox" id={todo.id} />{' '}
            <label htmlFor={todo.id} style={{ fontSize: '13px' }}>
              {todo.description}
            </label>
          </div>
          <i className="fas fa-ellipsis-h" onClick={onClick}></i>
        </div>

        {toggleAction && (
          <div className="cta-task">
            <span>
              <button
                className="btn btn-secondary btn-xm"
                title="edit"
                onClick={() => setCurrent(todo)}
              >
                Edit
              </button>
            </span>{' '}
            <span>
              <button
                className="btn btn-primary btn-xm"
                title="delete"
                onClick={onDelete}
              >
                Delete
              </button>
            </span>
          </div>
        )}
      </div>
    </Fragment>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default Todo;
