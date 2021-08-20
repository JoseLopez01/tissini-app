import { ActionBase, Category, Section } from '../../models';
import { getCategories, getSections } from '../../services/category-service';
import { AppDispatch } from '../store';

export type CATEGORY_ACTION_TYPES =
  | '[CATEGORY] Load Categories'
  | '[CATEGORY] Load Sections'
  | '[CATEGORY] Fetch Categories'
  | '[CATEGORY] Fetch Sections';

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
