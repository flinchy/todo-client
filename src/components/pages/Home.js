import React, { Fragment, useContext, useEffect } from 'react';
import AddTask from '../layout/AddTask';
import Todo from '../layout/Todo';
import TodoContext from '../../context/todo/todoContext';

const Home = () => {
  const todoContext = useContext(TodoContext);

  useEffect(() => {
    todoContext.getAllTodos();
     // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <AddTask />
      <Todo />
    </Fragment>
  );
};

export default Home;
