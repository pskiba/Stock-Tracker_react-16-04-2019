import {combineReducers} from 'redux';

import companyReducer from './companyReducer';
import searchingReducer from './searchingReducers';

const rootReducer = combineReducers({
    company: companyReducer,
    search: searchingReducer
});

export default rootReducer;