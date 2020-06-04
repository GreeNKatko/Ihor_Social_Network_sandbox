import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/Myposts'
const Profile = () => {
    return <div className={classes.content}>
        <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
        <div>
            ava + desciption
            </div>
            <MyPosts/>
 </div>
}
export default Profile;