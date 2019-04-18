import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import styles from './form.module.scss';

import Button from '../../components/button/button';
import SearchingTip from './searchingTip/searchingTip';

import addNewCompanyAct from '../../redux/actions/addNewCompanyAct';
import addNewSearchingAct from '../../redux/actions/addNewSearchingAct';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: 'Company symbol',
            searchTipOn: false,
            company: null
        };

        this.updateInputValue = (value) => {
            this.setState({
                searchValue: value
            });
            this.props.addNewSearching(value);
        };

        this.handleFocus = (e) => {
            this.setState({
                searchValue: '',
                searchTipOn: true
            });
        };

        this.closeSearchTip = () => {
            setTimeout(() => {
                this.setState({
                    ...this.state,
                    searchTipOn: false
                });
            }, 200);
        };

        this.companyExist = (company) => {
            return this.props.companies.filter((item) => company['1. symbol'] === item.bestMatches['1. symbol']).length;
        };

        this.handleSubmit = (e) => {
            e.preventDefault();
            if(!this.companyExist(this.state.company)) {
                e.preventDefault();
                this.props.history.push('/');
                this.props.addNewCompany(this.state.company);
            }
        };



        this.chooseCompany = (company) => {
            this.setState({
                ...this.state,
                searchValue: company[Object.keys(company)[0]],
                company: company
            });
        }
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className={styles.labelContainer}>
                    <label htmlFor="symbolField">Company symbol</label>
                </div>
                <div className={styles.inputContainer} onBlur={this.closeSearchTip}>
                    <input id="symbolField" type="text" autoComplete="off" onFocus={this.handleFocus} value={this.state.searchValue} onChange={(e) => { this.updateInputValue(e.target.value)}}/>
                    {!this.state.searchTipOn || <SearchingTip searchingItems={this.props.searchingItems} chooseCompany={this.chooseCompany}/>}
                </div>
                <div className={styles.descriptionContainer}>
                    Provide the stock exchange symbol of a company you want to track
                </div>
                <div className={styles.buttonContainer}>
                    <Button className="btnPrimary">Track</Button>
                </div>

            </form>
        )
    }
};


const mapStateToProps = (state) => {
    return {
        searchingItems: state.search.searchingItems,
        companies: state.company.companies,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewSearching: (value) => addNewSearchingAct(dispatch, value),
        addNewCompany: (value) => addNewCompanyAct(dispatch, value)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Form));
