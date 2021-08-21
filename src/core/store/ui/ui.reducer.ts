import { ActionBase } from '../../models';
import { UI_ACTION_TYPES } from './ui.actions';

export interface UIState {
  showModal: boolean;
}

const initialState: UIState = {
  showModal: false,
};

export function uiReducer(
  state = initialState,
  action: ActionBase<UI_ACTION_TYPES, any>
): UIState {
  switch (action.type) {
    case '[UI] Open Modal':
      return {
        ...state,
        showModal: true,
      };
    case '[UI] Close Modal':
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
}
