import { ADD_COMMENTS, GET_COMMENTS, GET_LIKES, ADD_LIKE_LIST, ADD_LIKE } from '../../types';

export default (state, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case GET_LIKES:
      return {
        ...state,
        likes: action.payload,
      };
    case ADD_COMMENTS:
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      };
    case ADD_LIKE_LIST:
      return {
        ...state,
        likes: [action.payload, ...state.likes],
      };
    case ADD_LIKE:
      return {
        ...state,
        likes: state.likes.map(like => like._id === action.payload._id ? action.payload : like),
      };
    default:
      return state;
  }
};
