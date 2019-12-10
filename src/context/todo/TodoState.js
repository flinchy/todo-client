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
  SET_LOADING,
  // SET_CHECK
} from '../Types';

const TodoState = props => {
  const initialState = {
    todos: [],
    current: null,
    // check: false,
    loading: false,
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  //*Get Todos
  const getAllTodos = async () => {
    //set loading here
    setLoading();

    try {
      const res = await axios.get(
        `https://todo-chisom.herokuapp.com/api/v1/tasks`,
      );

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
    setLoading();

    try {
      const res = await axios.post(
        `https://todo-chisom.herokuapp.com/api/v1/tasks`,
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
    setLoading();

    try {
      const res = await axios.put(
        `https://todo-chisom.herokuapp.com/api/v1/tasks/${id}`,
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
    //set loading
    setLoading();

    try {
       await axios.delete(
        `https://todo-chisom.herokuapp.com/api/v1/tasks/${id}`,
        id,
        SupportHeader({ 'Content-Type': 'application/json' }),
      );

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

  //*set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Set CheckBox
  // const setCheck = () => {
  //   dispatch({ type: SET_CHECK });
  // };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        current: state.current,
        loading: state.loading,
        // check: state.check,
        getAllTodos,
        createTodo,
        updateTodo,
        deleteTodo,
        setCurrent,
        clearCurrent,
        // setCheck
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
