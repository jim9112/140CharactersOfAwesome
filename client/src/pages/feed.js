import React from 'react';

import Nav from '../components/layout/Nav';
import Posts from '../components/posts/Posts';

const feed = () => {
    return (
        <div className='container feed-page'>
            <Nav />
            <div className="feed-middle">
                <h1 className="bottom-border orange">Home</h1>
                <form action="" className="bottom-border">
                    <textarea maxLength="140" cols="50" placeholder="Say Something"></textarea>
                    <input className="btn" type="submit" value="Post" />
                </form>
                <Posts />
            </div>
        </div>
        
    )
}

export default feed;
