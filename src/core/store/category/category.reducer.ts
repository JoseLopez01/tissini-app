import { ActionBase, Category, Section } from '../../models';
import { CATEGORY_ACTION_TYPES } from './category.actions';

export interface CategoryState {
  categories: Category[];
  sections: Section[];
}

const initialState: CategoryState = {
  categories: [],
  sections: [],
};

export function categoriesReducer(
  state = initialState,
  action: ActionBase<CATEGORY_ACTION_TYPES, any[]>
): CategoryState {
  switch (action.type) {
    case '[CATEGORY] Load Categories':
      return {
        ...state,
        categories: action.payload,
      };
    case '[CATEGORY] Load Sections':
      return {
        ...state,
        sections: action.payload,
      };
    default:
      return state;
  }
}
