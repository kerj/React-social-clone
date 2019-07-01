import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

function NavBar(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  NavBar.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  const useStyles = makeStyles({
    root: {
      color: 'red',
      fontFamily: 'fantasy',
    },
    NavSearch : {
    
    }
  });

  
  export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
    }

    return(
        <div className={classes.root}>
        
        <AppBar position="static" className="fb-row">
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Tweets"/><a href="#"></a>
                <Tab label="Following"/><a href="#"></a>
                <Tab label="Followers"/><a href="#"></a>
            </Tabs>
        </AppBar>
        </div>
  
    );
}



