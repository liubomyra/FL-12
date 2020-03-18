import {
  CREATE_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  SAVE_EDIT_ITEM,
  CANCEL_EDIT_ITEM,
  UPDATE_FILTER_TERM
} from './types';
import data from './data';
import { formatDate } from './utils';

const defaultState = {
  items: data.items || [],
  itemToEdit: null,
  filterTerm: ''
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_ITEM: {
      return {
        ...state,
        itemToEdit: {}
      };
    }

    case DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter(item => action.payload !== item.id)
      };
    }

    case EDIT_ITEM: {
      const itemToEdit = state.items.find(item => action.payload === item.id);
      return {
        ...state,
        itemToEdit
      };
    }

    case SAVE_EDIT_ITEM: {
      const items = state.items;
      const item = action.payload;
      item.date = formatDate(item.date);
      const elemIndex = state.items.findIndex(el => el.id === item.id);
      if (elemIndex !== -1) {
        items.splice(elemIndex, 1, item);
      } else {
        item.id =
          Math.max.apply(
            null,
            items.map(item => +item.id)
          ) + 1;
        items.push(item);
      }

      return {
        ...state,
        ...{
          items,
          itemToEdit: null
        }
      };
    }

    case CANCEL_EDIT_ITEM: {
      return {
        ...state,
        itemToEdit: null
      };
    }

    case UPDATE_FILTER_TERM: {
      return {
        ...state,
        filterTerm: action.payload
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
