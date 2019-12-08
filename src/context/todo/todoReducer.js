import { GET_TODOS } from '../Types';

export default (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};
