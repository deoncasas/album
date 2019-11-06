import { CHANGE_SEARCH_VIDEO_FIELD } from '../constants.js';

const initialState = {
    searchVideoField: ''
}

export const searchVideos = (state = initialState, action = {}) => {
    switch(action.type) {
        case CHANGE_SEARCH_VIDEO_FIELD:
            return Object.assign({}, state, { searchVideoField: action.payload })
        default:
            return state;
    }
}