import React from 'react';
import {Link} from 'react-router-dom';

import styles from './logo.module.scss';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link to="/">Stock Tracker</Link>
        </div>
    )
};

export default Logo;