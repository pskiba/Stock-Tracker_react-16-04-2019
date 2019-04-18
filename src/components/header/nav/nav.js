import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './nav.module.scss';

const Nav = () => {
    return (
        <nav className={styles.nav}>
        <ul>
            <li className={styles.navItem}>
                <NavLink to="/track-new-company">Track new company</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink to="/">companies</NavLink>
            </li>
        </ul>
        </nav>
    )
};

export default Nav;