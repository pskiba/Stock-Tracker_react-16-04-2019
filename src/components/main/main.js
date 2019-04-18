import React from 'react';

import styles from './main.module.scss';

const Main = ({children}) => {
    return (
        <main  className={styles.main}>
            <div className={styles.wrapper}>
                {children}
            </div>
        </main>
    )
};

export default Main;