import React from 'react';
import NavSearch from './NavSearch';

function NavBar(){
    return(
        <div>
            <ul>
                <li><a href="#"></a>Home</li>
                <li><a href="#"></a>Notifications</li>
                <li><a href="#">Messages</a></li>
            </ul>
        <NavSearch/>
        <button>Tweet</button>
        </div>
  
    );
}

export default NavBar;