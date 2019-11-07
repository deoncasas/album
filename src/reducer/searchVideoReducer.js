import { CHANGE_SEARCH_VIDEO_FIELD } from '../constants.js';

const initialStateSearch = {
    searchVideoField: ''
}

export const searchVideos = (state = initialStateSearch, action = {}) => {
    switch(action.type) {
        case CHANGE_SEARCH_VIDEO_FIELD:
            return Object.assign({}, state, { searchVideoField: action.payload })
        default:
            return state;
    }
}