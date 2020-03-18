import {
  CREATE_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  SAVE_EDIT_ITEM,
  CANCEL_EDIT_ITEM,
  UPDATE_FILTER_TERM
} from './types';

// actions
export const createItem = () => ({
  type: CREATE_ITEM,
  payload: null
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: id
});

export const editItem = id => ({
  type: EDIT_ITEM,
  payload: id
});

export const saveEditItem = item => ({
  type: SAVE_EDIT_ITEM,
  payload: item
});

export const cancelEditItem = () => ({
  type: CANCEL_EDIT_ITEM,
  payload: null
});

export const updateFilterTerm = term => ({
  type: UPDATE_FILTER_TERM,
  payload: term
});
