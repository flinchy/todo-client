import React, { useReducer } from 'react';
import axios from 'axios';
import TodoContext from './todoContext';
import TodoReducer from './todoReducer';
import SupportHeader from '../../SupportHeader';
import { GET_TODOS, CREATE_TODO } from '../Types';

const TodoState = props => {
  const initialState = {
    todos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  //*Get Todos
  const getAllTodos = async () => {
    //set loading here

    try {
      const res = await axios.get(`http://localhost:8080/api/v1/tasks`);

      dispatch({
        type: GET_TODOS,
        payload: res.data.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  //*Create Todo
  const createTodo = async payload => {
    //set Loading
    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/tasks`,
        payload,
        SupportHeader({ 'Content-Type': 'application/json' }),
      );

      dispatch({
        type: CREATE_TODO,
        payload: res.data.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        getAllTodos,
        createTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
