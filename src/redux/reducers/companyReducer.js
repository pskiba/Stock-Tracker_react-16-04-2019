const initState = {
    companies: []
};

function saveInStorage(companies) {
    let dataToSave = [];
    companies.forEach((item) => {
        dataToSave.push(JSON.stringify(item.bestMatches));
    });
    localStorage.setItem('companies-123456', dataToSave.join(',,,'));
    console.log('------------------------------------------------');
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
                return item.bestMatches['1. symbol'] !==  action.payload;
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