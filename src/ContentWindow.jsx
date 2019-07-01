import React from 'react';
import Profile from './Profile';
import NewsFeed from './NewsFeed';
import Trending from './Trending';

function ContentWindow(){
    return(
        <div>
            <Profile/>
            <NewsFeed/>
            <Trending/>
        </div>
    );
}

export default ContentWindow;