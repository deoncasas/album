import { changeSearchField } from '../../constants.js'

const setSearchField = (text) => ({
  type: changeSearchField,
  payload: text
})

export default setSearchField;
