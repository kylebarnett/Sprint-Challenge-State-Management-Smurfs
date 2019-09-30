import { FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, POST_SMURF_START, POST_SMURF_SUCCESS } from '../actions';

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false
      }
    case POST_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: [...state.smurfs, action.payload]
      }
    default:
      return state
  }
}