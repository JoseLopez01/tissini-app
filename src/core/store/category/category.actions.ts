import { ActionBase, Category, Section } from '../../models';

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
