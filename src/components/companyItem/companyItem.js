import React from 'react';

import styles from './companyItem.module.scss';

const CompanyItem = ({item, removeItem}) => {
    const change = Number.parseFloat(item.change).toFixed(2);
    const percent = Number.parseFloat(item.percent.replace('%', '')).toFixed(2) + '%';
    const price = Number.parseFloat(item.price).toFixed(2);
    const changeClass = Number(change) < 0 ? 'minusChange' : 'plusChange';
    return (
        <div className={styles.company}>
            <div className={styles.cancelBtn} onClick={() => { removeItem(item.symbol)}}>X</div>
            <div className={styles.companyImg}>
                <img src={item.logo}/>
            </div>
            <div className={styles.companyData}>
                <div>
                    <span className={styles.companyName}>{item.name}</span> {item.symbol} {item.domain}
                </div>
                <div>
                    {item.region} {item.marketOpen} - {item.marketClose} {item.timezone}
                </div>
                <div>
                    <span className={styles.companyValue}>{price}</span> {item.currency} <span className={styles[changeClass]}>{change} ({percent})</span> Closed: {item.latestTrading}
                </div>
            </div>
        </div>
    )
};

export default CompanyItem