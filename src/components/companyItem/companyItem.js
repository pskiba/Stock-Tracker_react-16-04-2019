import React from 'react';

import styles from './companyItem.module.scss';

const CompanyItem = ({bestMatches, globalQuote, autoComplete, removeItem}) => {
    return (
        <div className={styles.company}>
            <div className={styles.cancelBtn} onClick={() => { removeItem(bestMatches['1. symbol'])}}>X</div>
            <div className={styles.companyImg}>
                <img src={autoComplete.logo}/>
            </div>
            <div className={styles.companyData}>
                <div>
                    <span className={styles.companyName}>{bestMatches['2. name']}</span> {bestMatches['1. symbol']} {autoComplete.domain}
                </div>
                <div>
                    {bestMatches['4. region']} {bestMatches['5. marketOpen']} - {bestMatches['6. marketClose']} {bestMatches['7. timezone']}
                </div>
                <div>
                    <span className={styles.companyValue}>{globalQuote['05. price']}</span> {bestMatches['8. currency']} {globalQuote['09. change']} ({globalQuote['10. change percent']}) Closed: {globalQuote['07. latest trading day']}
                </div>
            </div>
        </div>
    )
};

export default CompanyItem