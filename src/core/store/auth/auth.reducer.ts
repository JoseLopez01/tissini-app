import { ActionBase, Customer } from '../../models';
import { AUTH_ACTION_TYPES } from './auth.actions';

export interface AuthState {
  customer: Customer | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  customer: null,
  isAuthenticated: false,
};

export function authReducer(
  state = initialState,
  action: ActionBase<AUTH_ACTION_TYPES, any>
): AuthState {
  switch (action.type) {
    case '[AUTH] Load User':
      return {
        ...state,
        customer: action.payload,
      };
    case '[AUTH] Logout':
      return {
        ...state,
        customer: null,
        isAuthenticated: false,
      };
    case '[AUTH] Login':
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
}
