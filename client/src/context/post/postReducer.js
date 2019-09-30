import {
  ADD_POST,
  GET_POSTS,
  CLEAR_POSTS,
  TOGGLE_DRAWER,
  DELETE_POST,
  TOGGLE_COMMENTS,
  SET_CURRENT_POST,
  CLEAR_CURRENT_POST
} from '../../types';

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
    case TOGGLE_COMMENTS:
      return {
        ...state,
        commentView: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload),
      };
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload,
      };
    default:
      return state;
  }
};
