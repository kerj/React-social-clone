import React from 'react';
import Article from './Article';
import Post from './Post';

function NewsFeed(){
    return(
        <div>
            <Post/>
            <Article/>
        </div>
    );
}

export default NewsFeed;