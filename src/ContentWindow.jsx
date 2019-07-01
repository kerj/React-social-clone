import React from 'react';
import Profile from './Profile';
import NewsFeed from './NewsFeed';
import Trending from './Trending';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
    mainWindow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

function ContentWindow(){
    const classes = styles();
    return(
        <div className={classes.mainWindow}>
            <Profile/>
            <NewsFeed/>
            <Trending/>
        </div>
    );
}

export default ContentWindow;