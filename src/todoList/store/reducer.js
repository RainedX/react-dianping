import { INIT_LIST, ADD_TODO_ITEM, CHANGE_INPUT_VALUE } from './actionTypes';
const initialState = {
  list: [],
  inputValue: ''
};
const reducer = (state = initialState, action) => {
  if (action.type === INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.inputValue;
    return newState;
  }

  return state;
};

export default reducer;
