import { ADD_COMMENTS, GET_COMMENTS } from '../../types';

export default (state, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_COMMENTS:
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      };
    default:
      return state;
  }
};
