import React from 'react';
import classes from './FriendsBarItem.module.css'
const FriendsBarItem = (props) => {
return (
    <div className={classes.frnd}>
        <img alt='some value' src={props.avatar} />
        <div>{props.name}</div>
        </div>
    )
}
export default FriendsBarItem