import { ActionBase } from '../../models';

export type UI_ACTION_TYPES = '[UI] Open Modal' | '[UI] Close Modal';

export function openModal(): ActionBase<UI_ACTION_TYPES, any> {
  return {
    type: '[UI] Open Modal',
    payload: null,
  };
}

export function closeModal(): ActionBase<UI_ACTION_TYPES, any> {
  return {
    type: '[UI] Close Modal',
    payload: null,
  };
}
