import { GET_TODOS, CREATE_TODO } from '../Types';

export default (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    default:
      return state;
  }
};
