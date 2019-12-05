import React, { useState } from 'react';

const AddTask = () => {
  const [todo, setTodo] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    console.log(todo);
    setTodo('');
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
