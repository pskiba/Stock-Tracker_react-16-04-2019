const initState = {
    companies: [],
    savedCompanies: localStorage.getItem('companies-123456') ? localStorage.getItem('companies-123456').split(',.,') : []
};

function saveInStorage(companies) {
    let dataToSave = [];
    companies.forEach((item) => {
        dataToSave.push(item.symbol);
    });
    let strDataToSave = dataToSave.length ? dataToSave.join(',.,') : '';
    localStorage.setItem('companies-123456', strDataToSave);
}

const companyReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_NEW_COMPANY':
            const companies = [...state.companies, action.payload];
            saveInStorage(companies);
            return {
                ...state,
                companies: companies
            };
            break;
        case 'REMOVE_COMPANY':
            const companies2 = state.companies.filter((item) => {
                return item.symbol !==  action.payload;
            });
            saveInStorage(companies2);
            return {
                ...state,
                companies: companies2
            };
            break;
        default:
            return {...state}
    }
};

export default companyReducer;