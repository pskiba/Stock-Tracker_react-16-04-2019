import React from 'react';
import styles from './button.module.scss';

const Button = ({className, children, ...props}) => {
    return (
        <button className={styles.btn + ' ' + styles[className]} {...props}>{children}</button>
    )
};

export default Button;