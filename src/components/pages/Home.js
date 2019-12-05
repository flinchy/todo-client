import React, { Fragment } from 'react';
import AddTask from '../layout/AddTask';
import Todo from '../layout/Todo';

const Home = () => {
  return (
    <Fragment>
        <AddTask />
        <Todo />
    </Fragment>
  )
}

export default Home
