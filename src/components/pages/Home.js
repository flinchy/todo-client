import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AddTask from '../layout/AddTask';
import Todo from '../layout/Todo';
import TodoContext from '../../context/todo/todoContext';
import Spinner from '../layout/Spinner';

const Home = () => {
  const todoContext = useContext(TodoContext);
  const { todos, loading } = todoContext;

  useEffect(() => {
    todoContext.getAllTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {loading && <Spinner />}
      <AddTask />
      <TransitionGroup>
        {todos.map(todo => (
          <CSSTransition key={todo.id} timeout={500}>
            <Todo todo={todo} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Home;
