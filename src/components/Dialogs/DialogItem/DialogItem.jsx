import React from 'react';
import classes from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={classes.dialog}>
        <img alt='some value' src={props.avatar} />
        <NavLink activeClassName={classes.active} to={path}> {props.name} </NavLink>
    </div>
}
export default DialogItem