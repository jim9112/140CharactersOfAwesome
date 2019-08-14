import React, { useReducer } from 'react';
import PostContext from './postContext';
import postReducer from './postReducer';


const PostState = props => {
    const initialState = {
        posts: {}
    }
}

const [state, dispatch] = useReducer(postReducer, initialState);


return(
    <PostContext.Provider value={{
        posts: state.posts,
    }}>
    { props.children}
    </PostContext.Provider>
)