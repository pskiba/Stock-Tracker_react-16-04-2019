import React from 'react';

import styles from './searchingTip.module.scss';

import SearchingTipItem from './searchingTipItem/searchingTipItem';

const SearchingTip = ({searchingItems, chooseCompany}) => {
    return (
        <div className={styles.searchingTip}>
            <div className={styles.triangle}></div>
            <ul>
                {searchingItems.map((item) => <SearchingTipItem data={item} chooseCompany={chooseCompany} key={item[Object.keys(item)[0]]} />)}
            </ul>
        </div>
    )
};

export default SearchingTip;