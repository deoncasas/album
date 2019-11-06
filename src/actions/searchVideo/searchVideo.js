import { CHANGE_SEARCH_VIDEO_FIELD } from '../../constants.js'

export const setSearchVideo = (text) => {
  console.log(text);
  return {
    type: CHANGE_SEARCH_VIDEO_FIELD,
    payload: text
  }
};
