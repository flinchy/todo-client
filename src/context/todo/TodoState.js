import React, { useReducer } from 'react';
import axios from 'axios';
import TodoContext from './todoContext';
import TodoReducer from './todoReducer';
import SupportHeader from '../../SupportHeader';
import {
  GET_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  SET_CURRENT,
  CLEAR_CURRENT,
} from '../Types';

const TodoState = props => {
  const initialState = {
    todos: [],
    current: null,
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
      console.error({ error: error });
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
      console.error({ error: { error } });
    }
  };

  //*Update Todo
  const updateTodo = async (id, payload) => {
    //set loading
    try {
      const res = await axios.put(
        `http://localhost:8080/api/v1/tasks/${id}`,
        payload,
        SupportHeader({ 'Content-Type': 'application/json' }),
      );

      dispatch({
        type: UPDATE_TODO,
        payload: res.data.data,
      });
    } catch (error) {
      console.error({ error });
    }
  };

  //*Delete Todo
  const deleteTodo = async id => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/v1/tasks/${id}`,
        id,
        SupportHeader({ 'Content-Type': 'application/json' }),
      );
      console.log(res);
      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
    } catch (error) {
      console.error({ error });
    }
  };

  //*Set Current Todo
  const setCurrent = todo => {
    dispatch({ type: SET_CURRENT, payload: todo });
  };

  //*Clear Current Todo
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        current: state.current,
        getAllTodos,
        createTodo,
        updateTodo,
        deleteTodo,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
