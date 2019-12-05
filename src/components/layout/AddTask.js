import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const AddTask = () => {
  const alertContext = useContext(AlertContext);

  const [todo, setTodo] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (todo === '') {
      alertContext.setAlert('Please enter a todo', 'dark');
    } else {
      console.log(todo);
      setTodo('');
    }
  };

  const onChange = e => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="Add a Task.."
          className="bg-dark todo_input"
          onChange={onChange}
        />
        <input
          type="submit"
          value="addTodo"
          className="btn btn-light btn-dark"
        />
      </form>
    </div>
  );
};

export default AddTask;
