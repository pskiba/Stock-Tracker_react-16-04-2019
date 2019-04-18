const removeCompanyAct = (dispatch, value) => {
    dispatch({type: 'REMOVE_COMPANY', payload: value})
};

export default removeCompanyAct;
