const initState = {
    searchingItems: []
};

const searchingReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_NEW_SEARCHING':
            return {
                ...state,
                searchingItems: [...action.payload]
            };
            break;
        default:
            return {...state}
    }
};

export default searchingReducer;