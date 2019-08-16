import axios from 'axios';

export const GET_SMURF_DATA_REQUEST = 'GET_SMURF_DATA_REQUEST';
export const GET_SMURF_DATA_SUCCESS = 'GET_SMURF_DATA_SUCCESS';
export const GET_SMURF_DATA_FAILURE = 'GET_SMURF_DATA_FAILURE';

export const getData = () => {
    return dispatch => {
      dispatch({ type: GET_SMURF_DATA_REQUEST });
      axios
        .get('http://localhost:3333/smurfs')

        .then(result => {
          console.log(result);
          dispatch({ type: GET_SMURF_DATA_SUCCESS, payload: result.data });
        })

        .catch(error => {
          dispatch({ type: GET_SMURF_DATA_FAILURE, payload: '' });
        });
    };
  };
  