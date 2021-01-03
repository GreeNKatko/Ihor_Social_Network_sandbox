import React from 'react';
import classes from './Header.module.css'
const Header = () => {
    return <header className={classes.header}>
        <img alt='some value' src='https://placeitmarketing.s3.amazonaws.com/public/custompages/logo-maker/Esports-Logo-Maker.png' />
    </header>;
}

export default Header;