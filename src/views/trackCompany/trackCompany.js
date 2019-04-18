import React from 'react';

import styles from './trackCompany.module.scss';

import Main from '../../components/main/main';
import Form from '../../components/form/form';




class TrackCompany extends React.Component {

    render() {
        return (
            <Main>
                <h2 className={styles.header}>Track new company</h2>
                <Form/>
            </Main>
        )
    }
}



export default TrackCompany;