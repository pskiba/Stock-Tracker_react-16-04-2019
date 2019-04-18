import React from 'react';
import {connect} from 'react-redux';

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
            let items = localStorage.getItem('companies-123456') ? localStorage.getItem('companies-123456').split(',,,') : [];
            items.forEach((item, index) => {
                setTimeout(() => {
                    this.props.addNewCompany(JSON.parse(item));
                }, index * 100);

            });
        }


    }

    render() {
        const {companies, removeCompany} = this.props;
        return(
            <Main>
                <h2 className={styles.header}>Companies</h2>
                <ItemList items={companies} removeItem={removeCompany} Component={CompanyItem}/>
            </Main>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        companies: state.company.companies,
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
