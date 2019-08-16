const initialState = {
    smurfsCollection: [],
    error: ''
}

const reducer = (state = initialState, action) =>{
    console.log('state: ', state);
    console.log('current action: ', action);

    switch(action.type){
        default:
            return state;
    }

}

export default reducer;