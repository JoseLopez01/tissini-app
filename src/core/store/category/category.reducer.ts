import { ActionBase, Category, Product, Section } from '../../models';
import { CATEGORY_ACTION_TYPES } from './category.actions';

export interface CategoryState {
  categories: Category[];
  sections: Section[];
  activeProduct: Product | null;
}

const initialState: CategoryState = {
  categories: [],
  sections: [],
  activeProduct: null,
};

export function categoriesReducer(
  state = initialState,
  action: ActionBase<CATEGORY_ACTION_TYPES, any>
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
    case '[CATEGORY] Set Active Product':
      return {
        ...state,
        activeProduct: action.payload,
      };
    default:
      return state;
  }
}
