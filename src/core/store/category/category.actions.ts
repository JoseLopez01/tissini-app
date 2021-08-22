import { ActionBase, Category, Product, Section } from '../../models';
import { getCategories, getSections } from '../../services/category-service';
import { AppDispatch } from '../store';

export type CATEGORY_ACTION_TYPES =
  | '[CATEGORY] Load Categories'
  | '[CATEGORY] Load Sections'
  | '[CATEGORY] Fetch Categories'
  | '[CATEGORY] Fetch Sections'
  | '[CATEGORY] Set Active Product';

export function loadCategories(
  categories: Category[]
): ActionBase<CATEGORY_ACTION_TYPES, Category[]> {
  return {
    type: '[CATEGORY] Load Categories',
    payload: categories,
  };
}

export function loadSections(
  sections: Section[]
): ActionBase<CATEGORY_ACTION_TYPES, Section[]> {
  return {
    type: '[CATEGORY] Load Sections',
    payload: sections,
  };
}

export function setActiveProduct(
  product: Product
): ActionBase<CATEGORY_ACTION_TYPES, Product> {
  return {
    type: '[CATEGORY] Set Active Product',
    payload: product,
  };
}

export function fecthCategories() {
  return (dispatch: AppDispatch) => {
    getCategories()
      .then((categories) => {
        dispatch(loadCategories(categories));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function fecthSections() {
  return (dispatch: AppDispatch) => {
    getSections()
      .then((sections) => {
        dispatch(loadSections(sections));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
