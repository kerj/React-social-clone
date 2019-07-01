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
    },
    bigFlex: {
        flexGrow: '3'
    },
    smallFlex: {
        flexGrow: '1'
    }
})

function ContentWindow(){
    const classes = styles();
    return(
        <div className={classes.mainWindow}>
            <div className={classes.smallFlex}>
                <Profile/>
            </div>
            <div className={classes.bigFlex}>
                <NewsFeed/>
            </div>
            <div className={classes.smallFlex}>
                <Trending/>
            </div>
            
        </div>
    );
}

export default ContentWindow;