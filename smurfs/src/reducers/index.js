
import {
    GET_SMURF_DATA_REQUEST, 
    GET_SMURF_DATA_SUCCESS, 
    GET_SMURF_DATA_FAILURE,
    POST_SMURF_DATA_REQUEST,
    POST_SMURF_DATA_SUCCESS,
    POST_SMURF_DATA_FAILURE} from '../actions';

const initialState = {
    smurfsCollection: [],
    error: ''
}

const reducer = (state = initialState, action) =>{
    console.log('state: ', state);
    console.log('current action: ', action);

    switch(action.type){

        case GET_SMURF_DATA_REQUEST:
                return{
                    ...state
                }
        case GET_SMURF_DATA_SUCCESS:
                    return{
                        ...state,
                        smurfsCollection: action.payload
                    }
        case GET_SMURF_DATA_FAILURE:
                    return{
                        ...state
                    }
        case POST_SMURF_DATA_REQUEST:
                return{
                    ...state
                }






        default:
            return state;
    }

}

export default reducer;