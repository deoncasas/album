import { 
    REQUEST_VIDEO_PENDING,
    REQUEST_VIDEO_SUCCESS,
    REQUEST_VIDEO_FAILED
  } from '../constants.js'

export const requestVideo = () => (dispatch) => {
    dispatch({
      type: REQUEST_VIDEO_PENDING
    });
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(responce => responce.json())
    .then(data => dispatch({
      type: REQUEST_VIDEO_SUCCESS, payload: data
    }))
    .catch(error => dispatch({
      type: REQUEST_VIDEO_FAILED,
      payload: error
    }))
  };