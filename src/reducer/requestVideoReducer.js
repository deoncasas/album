import { 
    REQUEST_VIDEO_PENDING,
    REQUEST_VIDEO_SUCCESS,
    REQUEST_VIDEO_FAILED
  } from '../constants';

  const initialStateVideo = {
    videos: [],
    isPending: false,
    error: ''
}

  export const requestVideo = (state = initialStateVideo, action = {}) => {
    switch(action.type) {
        case REQUEST_VIDEO_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_VIDEO_SUCCESS:
            return Object.assign({}, state, { videos: action.payload, isPending: false  })
        case REQUEST_VIDEO_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}