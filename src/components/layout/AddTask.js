import React, { useState, useContext } from 'react';
import TodoContext from '../../context/todo/todoContext';
import AlertContext from '../../context/alert/alertContext';

const AddTask = () => {
  const todoContext = useContext(TodoContext);
  const alertContext = useContext(AlertContext);

  const [todo, setTodo] = useState({
    title: '',
    description: '',
    status: '',
  });
  const {title, description, status} = todo;


  const onSubmit = e => {
    e.preventDefault();
    if (title === '' || description === '' || status === '') {
      alertContext.setAlert('Please fill in all fields', 'dark');
    } else {
      todoContext.createTodo(todo);
      setTodo({
        title: '',
        description: '',
        status: ''
      })
    }
  };

  const onChange = e => {
    e.preventDefault()
    setTodo({...todo,[e.target.name]: e.target.value});
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
          type="text"
          name="status"
          value={todo.status}
          placeholder="status.."
          className="bg-dark todo_input"
          onChange={onChange}
        />
        <input
          type="submit"
          value="AddTodo"
          className="btn btn-light btn-dark btn-xm"
        />
        <span>
        </span>
      </form>
    </div>
  );
};

export default AddTask;
