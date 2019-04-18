import React from 'react';

import styles from './searchingTipItem.module.scss';

const SearchingTipItem = ({data, chooseCompany}) => {
    const symbol = data[Object.keys(data)[0]];
    const name = data[Object.keys(data)[1]];
    return (
        <li className={styles.searchingTipItem} onClick={() => {chooseCompany(data)}}>
            <div className={styles.companySymbol}>
                {symbol}
            </div>
            <div className={styles.companyName}>
                {name}
            </div>
        </li>
    )
};

export default SearchingTipItem;