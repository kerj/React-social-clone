import React from 'react';
import Article from './Article';
import Post from './Post';
import { makeStyles } from '@material-ui/styles';


const style = makeStyles({
    newsDisplay: {
        flexGrow: '2'
    }
})

function NewsFeed(){
    const classes = style();
    return(
        <div className={classes.newsDisplay}>
            <Post/>
            <Article/>
        </div>
    );
}

export default NewsFeed;