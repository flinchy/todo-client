import React, { useReducer } from 'react';
import axios from 'axios';
import TodoContext from './todoContext';
import TodoReducer from './todoReducer';
import { GET_TODOS } from '../Types';

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

      console.log(res);

      dispatch({
        type: GET_TODOS,
        payload: res.data,
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
      }}>
          {props.children}
      </TodoContext.Provider>
  )

};


export default TodoState;