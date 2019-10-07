import { ADD_COMMENTS, GET_COMMENTS, GET_LIKES, ADD_LIKE_LIST } from '../../types';

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
    default:
      return state;
  }
};
