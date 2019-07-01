import React from 'react';
import NavSearch from './NavSearch';
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
  

  
  export default function SimpleTabs() {
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
    }

    return(
        <div class="nav">
        <AppBar position="static" className="fb-row">
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Home"/><a href="#"></a>
                <Tab label="Notifications"/><a href="#"></a>
                <Tab label="Messages"/><a href="#"></a>
            </Tabs>
            <NavSearch/>
            <button>Tweet</button>

        </AppBar>
        </div>
  
    );
}