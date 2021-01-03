import React from 'react';
import { connect } from 'react-redux';
import Friendsbar from './FriendsBar'

let mapStateToProps = (state) => {
    return{
        friendsbar: state.sidebar.friendsbar
    }
}
let mapDispatchToProps = () => {
    return {}
}
const FriendsbarContainer = connect(mapStateToProps, mapDispatchToProps)(Friendsbar);
export default FriendsbarContainer;