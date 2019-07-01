import React from 'react';
import { makeStyles } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const styles = makeStyles({
    navSearch: {
        backgroundColor: 'whitesmoke',
        marginTop: '14px'
    }
})

function NavSearch(){
    const classes = styles();
    return(
        <div>
            <input className={classes.navSearch} placeholder="Search" type="text"/>
        </div>
    );
}

export default NavSearch;