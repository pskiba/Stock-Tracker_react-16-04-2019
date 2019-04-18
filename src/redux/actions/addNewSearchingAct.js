let justSent = false;

function sendRequest(dispatch, value) {
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=FK3GDV8NA2WPTDSU`,{
        method: 'GET'
    })
        .then((response) => response.json())
        .then((response) => {
            if(response && response.bestMatches) {
                dispatch({type: 'ADD_NEW_SEARCHING', payload: response.bestMatches});
            }
        });
}

const addNewSearchingAct = (dispatch, value) => {
    if(!justSent) {
        justSent = true;
        setTimeout(() => {justSent = false});
        sendRequest(dispatch, value);
    }

};

export default addNewSearchingAct;
