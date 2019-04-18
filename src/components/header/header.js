import React from 'react';

import styles from './header.module.scss';

import Logo from './logo/logo';
import Nav from './nav/nav';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Logo/>
                <Nav/>
            </div>
        </header>
    )
};

export default Header;