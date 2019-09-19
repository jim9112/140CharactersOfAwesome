import { ADD_POST, GET_POSTS, CLEAR_POSTS, TOGGLE_DRAWER } from '../../types';

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case CLEAR_POSTS:
      return {
        ...state,
        posts: [],
      };
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawer: action.payload,
      };
    default:
      return state;
  }
};
