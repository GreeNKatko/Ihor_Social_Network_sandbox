import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={classes.profilePage}>
            <div>
                <img alt='some value' src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
            </div>
            <div className={classes.descriptonBlock}>
                ava + desciption
            </div>

        </div>

    )
}
export default ProfileInfo;