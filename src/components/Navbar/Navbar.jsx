import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import Friendsbar from './Friends/FriendsBar';
import FriendsbarContainer from './Friends/FriendsBarContainer';
const Navbar = (props) => {
    return (<nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
        </div>
        <div className={classes.settings}>
            <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
        </div>
        <div> <FriendsbarContainer /> </div>


    </nav>
    )
}

export default Navbar;
