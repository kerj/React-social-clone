import React from 'react';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
    articleDisplay: {
        flexDirection: 'row',
        margin: '0px 10px 0px 10px',
        border: '1px solid darkslategrey',
        backgroundColor: 'whiteSmoke',
        flexGrow: '2'
    },
    articleSeparate: {
        borderBottom: '1px solid darkslategrey'
    }
})

function Article(){
    const classes = styles();
    return(
        <div className={classes.articleDisplay}>
            <h3>Article title</h3>
            <p className={classes.articleSeparate}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi beatae incidunt consequuntur ad tenetur. Labore, voluptatum est commodi aut aperiam voluptates, dolor, obcaecati natus libero reprehenderit assumenda tempora accusamus odio!</p>

            <h3>Article title 2</h3>
            <p className={classes.articleSeparate}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi beatae incidunt consequuntur ad tenetur. Labore, voluptatum est commodi aut aperiam voluptates, dolor, obcaecati natus libero reprehenderit assumenda tempora accusamus odio!</p>

            <h3>Article title 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi beatae incidunt consequuntur ad tenetur. Labore, voluptatum est commodi aut aperiam voluptates, dolor, obcaecati natus libero reprehenderit assumenda tempora accusamus odio!</p>
        </div>
    )
}

export default Article;