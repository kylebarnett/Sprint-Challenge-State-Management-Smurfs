import axios from 'axios';

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE"

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START })
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data })
    })
}

export const POST_SMURF_START = "POST_SMURF_START"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE"

export const postSmurf = smurf => dispatch => {
  dispatch({ type: POST_SMURF_START })
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log("post", res)
      dispatch({ type: POST_SMURF_SUCCESS, payload: res.data })
    }).then(
      axios.get('http://localhost:3333/smurfs')
        .then(res => {
          dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data })
        })
    )
}