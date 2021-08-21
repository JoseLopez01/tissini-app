import { ActionBase, Customer } from '../../models';

export type AUTH_ACTION_TYPES =
  | '[AUTH] Login'
  | '[AUTH] Logout'
  | '[AUTH] Load User';

export function loadUser(
  customer: Customer
): ActionBase<AUTH_ACTION_TYPES, Customer> {
  return {
    type: '[AUTH] Load User',
    payload: customer,
  };
}

export function logout(): ActionBase<AUTH_ACTION_TYPES, null> {
  return {
    type: '[AUTH] Logout',
    payload: null,
  };
}

export function login(number: string): ActionBase<AUTH_ACTION_TYPES, null> {
  return {
    type: '[AUTH] Login',
    payload: null,
  };
}
