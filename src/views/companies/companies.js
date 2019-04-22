import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import styles from './company.module.scss';

import Main from '../../components/main/main';
import ItemList from '../../components/itemList/itemList';
import CompanyItem from '../../components/companyItem/companyItem';
import addNewCompanyAct from '../../redux/actions/addNewCompanyAct';
import addNewSearchingAct from '../../redux/actions/addNewSearchingAct';
import removeCompanyAct from '../../redux/actions/removeCompanyAct';


class Companies extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount () {
        if(!this.props.companies.length) {
            this.props.savedCompanies.forEach((item, index) => {
                setTimeout(() => {
                    this.props.addNewCompany({symbol: item});
                }, index * 100);

            });
        }
    }

    render() {
        const {companies, savedCompanies, removeCompany} = this.props;

        const zeroCompaniesMsgHTML = (!companies.length && !savedCompanies.length) ? <div>There are no companies yet. <Link to="/track-new-company">Track your first company.</Link></div> : null;
        const waitForMsgHTML = companies.length < savedCompanies.length ? <div className={styles.message}>the data of {savedCompanies.length - companies.length} companies have not yet been downloaded. Please wait...</div> : null;

        return(
            <Main>
                <h2 className={styles.header}>Companies</h2>
                <ItemList items={companies} removeItem={removeCompany} Component={CompanyItem}/>
                {zeroCompaniesMsgHTML}
                {waitForMsgHTML}
            </Main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        companies: state.company.companies,
        savedCompanies: state.company.savedCompanies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewCompany: (value) => addNewCompanyAct(dispatch, value),
        addNewSearching: (value) => addNewSearchingAct(dispatch, value),
        removeCompany: (value) => removeCompanyAct(dispatch, value)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Companies);
