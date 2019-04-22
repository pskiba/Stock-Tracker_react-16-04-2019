let justSent = false;

function isCorrectResponse(response) {
    return new Promise((resolve, reject) =>{
        if(response && response.bestMatches) {
            resolve(response);
        } else {
            reject();
        }
    });
}

function sendRequest(value) {
    return fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=FK3GDV8NA2WPTDSU`,{
            method: 'GET'
        })
        .then((response) => response.json())
        .then(isCorrectResponse);
}

const addNewSearchingAct = (dispatch, value) => {
    if(!justSent) {
        justSent = true;
        setTimeout(() => {justSent = false});
        sendRequest(value)
            .then((response) => {
                dispatch({type: 'ADD_NEW_SEARCHING', payload: response.bestMatches});
            })
            .catch(() => {})
    }

};

export default addNewSearchingAct;
