import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AddTask from '../layout/AddTask';
import Todo from '../layout/Todo';
import TodoContext from '../../context/todo/todoContext';

const Home = () => {
  const todoContext = useContext(TodoContext);
  const { todos } = todoContext;

  useEffect(() => {
    todoContext.getAllTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
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
