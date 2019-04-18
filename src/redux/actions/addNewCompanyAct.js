
function getAdditionalData(bestMatches) {

    const name = bestMatches[Object.keys(bestMatches)[1]].split(' ')[0];
    return fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${name}`,{
        method: 'GET'
    })
        .then((response) => response.json())
        .then((response) => {

            return new Promise((resolve, reject) =>{
                if(response && response.length) {
                    resolve(response);
                } else {
                    reject();
                }
            });

        });
}

function getGlobalQuote(bestMatches) {
    return fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${bestMatches[Object.keys(bestMatches)[0]]}&apikey=FK3GDV8NA2WPTDSU`,{
        method: 'GET'
    })
        .then((response) => response.json())
        .then((response) => {

            return new Promise((resolve, reject) => {
                if(response && response['Global Quote']) {
                    resolve(response['Global Quote']);
                } else {
                    reject();
                }
            });

        });
}

const addNewCompanyAct = (dispatch, bestMatches) => {
    let company = {
        bestMatches: bestMatches
    };
    getGlobalQuote(bestMatches)
        .then((data) => {
            company.globalQuote = data;
            return getAdditionalData(bestMatches);
        })
        .then((data) => {
            if(data && data.length) {
                company.autoComplete = data[0];
                company.id = bestMatches['1. symbol'];
                dispatch({type: 'ADD_NEW_COMPANY', payload: company})
            }
        })
        .catch(() => {
        })

};

export default addNewCompanyAct;
