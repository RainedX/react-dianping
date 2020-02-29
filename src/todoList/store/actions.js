import { INIT_LIST, ADD_TODO_ITEM, CHANGE_INPUT_VALUE } from './actionTypes';

export const addTodo = () => {
  return {
    type: ADD_TODO_ITEM
  };
};

export const changeInputValue = inputValue => {
  return {
    type: CHANGE_INPUT_VALUE,
    inputValue
  };
};

export const initList = data => {
  return {
    type: INIT_LIST,
    data
  }
}

export const getListData = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(initList(['React', 'Vue', 'Node']))
    }, 1000)
  }
}