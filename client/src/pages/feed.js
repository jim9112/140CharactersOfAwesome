/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useEffect } from 'react';

import Nav from '../components/layout/Nav';
import Posts from '../components/posts/Posts';
import PostContext from '../context/post/postContext';
import AuthContext from '../context/auth/authContext';

const Feed = () => {
  const postContext = useContext(PostContext);
  const authContext = useContext(AuthContext);

  const { addPost, posts } = postContext;
  const { user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
  }, []);
  // hard coded in username nd id, remove later <<<<<<<<<<<<<<<<<<<<<<
  const post = {
    id: posts.length + 1,
    username: 'jim9112',
    post: '',
  };

  // resets post input
  const resetForm = () => {
    document.getElementById('feed-form').reset();
  };

  // updates post variable as the user types
  const onChange = (e) => {
    post.post = e.target.value;
  };

  // submitting the form and clearing it
  const onSubmit = (e) => {
    e.preventDefault();
    addPost(post);
    resetForm();
  };

  return (
    <div className='container feed-page'>
      <Nav />
      <div className="feed-middle">
        <h1 className="bottom-border orange">Hello { user && user.userName }</h1>
        <form action="" className="bottom-border" id="feed-form" onSubmit={onSubmit}>
          <textarea maxLength="140" cols="50" placeholder="Say Something" onChange={onChange}></textarea>
          <input className="btn" type="submit" value="Post" />
        </form>
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
