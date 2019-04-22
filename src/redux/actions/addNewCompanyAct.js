const addNewCompanyAct = (dispatch, data) => {

    let companyData = data;

    const search = {
        query: (companyData) => `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${companyData.symbol}&apikey=FK3GDV8NA2WPTDSU`,
        checkResponse: (response) => response && response.bestMatches,
        checkData: companyData.name,
        storeData: (companyData, response) => {
            let res = response.bestMatches[0];
            companyData.symbol = res["1. symbol"];
            companyData.name = res["2. name"];
            companyData.type = res["3. type"];
            companyData.region = res["4. region"];
            companyData.marketOpen = res["5. marketOpen"];
            companyData.marketClose = res["6. marketClose"];
            companyData.timezone = res["7. timezone"];
            companyData.currency = res["8. currency"];
        }
    };

    const quote = {
        query: (companyData) => `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${companyData.symbol}&apikey=FK3GDV8NA2WPTDSU`,
        checkResponse: (response) => response && response['Global Quote'],
        checkData: companyData.price,
        storeData: (companyData, response) => {
            let res = response['Global Quote'];
            companyData.price = res["05. price"];
            companyData.change = res["09. change"];
            companyData.percent = res["10. change percent"];
            companyData.latestTrading = res["07. latest trading day"];
        }
    };

    const autocomplete = {
        query: (companyData) => `https://autocomplete.clearbit.com/v1/companies/suggest?query=${companyData.name.split(' ')[0]}`,
        checkResponse: (response) => response && response.length,
        checkData: companyData.logo,
        storeData: (companyData, response) => {
            let res = response[0];
            companyData.logo = res["logo"];
            companyData.domain = res["domain"];
        }
    };

    function createRequest(query, checkData) {
        if(checkData) {
            return new Promise((resolve, reject) => resolve(true));
        } else {
            return fetch(query, {method: 'GET'})
                .then((response) => response.json())
        }
    }

    const handleStep = (currentStep, nextStep, response) => {
        if(response === true) {
            return createRequest(nextStep.query(companyData), nextStep.checkData);
        } else if(currentStep.checkResponse(response)) {
            currentStep.storeData(companyData, response);
            return createRequest(nextStep.query(companyData), nextStep.checkData);
        } else {
            return new Promise((resolve, reject) => reject());
        }
    };

    function sendRequest() {

        createRequest(search.query(companyData), search.checkData)
            .then((response) => { return handleStep(search, quote, response)})
            .then((response) => { return handleStep(quote, autocomplete, response)})
            .then((response) => {
                if(autocomplete.checkResponse(response)) {
                    autocomplete.storeData(companyData, response);
                    dispatch({type: 'ADD_NEW_COMPANY', payload: companyData});
                } else {
                    return new Promise((resolve, reject) => reject());
                }
            })
            .catch(() => {
                console.log('catch');
                setTimeout(sendRequest, 1000);
            });
    }
    sendRequest();
};


export default addNewCompanyAct;




