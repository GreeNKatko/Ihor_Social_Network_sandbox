import React from 'react';
import FriendsBarItem from './FriendsBarItem/FriendsBarItem'
const Friendsbar = (props) => {
    let FriendsBarElement = props.friendsbar.map (f => <FriendsBarItem avatar={f.avatar} name={f.name} />);
    return (
        <div>
        <div>Friends</div>
        <div>{FriendsBarElement}</div>
        </div>
    )
}
export default Friendsbar;