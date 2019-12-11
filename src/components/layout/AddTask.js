import React, { useState, useContext, useEffect } from 'react';
import TodoContext from '../../context/todo/todoContext';
import AlertContext from '../../context/alert/alertContext';

const AddTask = () => {
  const todoContext = useContext(TodoContext);
  const { createTodo, updateTodo, current, clearCurrent } = todoContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  useEffect(() => {
    if (current !== null) {
      setTodo(current);
    } else {
      setTodo({
        title: '',
        description: '',
        status: '',
      });
    }
  }, [todoContext, current]);

  const [todo, setTodo] = useState({
    title: '',
    description: '',
    status: '',
  });
  const { title, description } = todo;

  const onSubmit = e => {
    e.preventDefault();
    if (title === '' || description === '') {
      setAlert('Please fill in all fields', 'dark');

    }else if (current === null) {
      createTodo(todo);
      setAlert('Todo added successfully', 'success')
    } else {
      setAlert('Todo updated successfully', 'success')
      updateTodo(todo.id, todo);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  const onChange = e => {
    e.preventDefault();
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          value={todo.title}
          placeholder="Add Todo Title.."
          className="bg-dark todo_input"
          onChange={onChange}
        />

        <input
          type="text"
          name="description"
          value={todo.description}
          placeholder="Add Todo Description.."
          className="bg-dark todo_input"
          onChange={onChange}
        />
        <input
          type="hidden"
          name="status"
          value="pending"
          placeholder="status.."
          className="bg-dark todo_input"
          disabled
        />
        <input
          type="submit"
          value={current === null ? 'Add' : 'Update'}
          className="btn btn-success btn-xm"
          style={{ fontSize: '13px', color: '#ccc' }}
        />
        {current && (
          <input
            type="submit"
            value="cancel"
            className="btn btn-secondary btn-xm"
            style={{ fontSize: '13px' }}
          onClick={clearAll}/>
        )}
      </form>
    </div>
  );
};

export default AddTask;
