import { ActionBase, Product } from '../../models';

export type CART_ACTION_TYPES =
  | '[CART] Add Item'
  | '[CART] Remove Item'
  | '[CART] Load Items'
  | '[CART] Update Item';

export function addItem(
  product: Product,
  quantity: number
): ActionBase<CART_ACTION_TYPES, any> {
  return {
    type: '[CART] Add Item',
    payload: { product, quantity },
  };
}

export function updateItem(
  id: number,
  quantity: number
): ActionBase<CART_ACTION_TYPES, any> {
  return {
    type: '[CART] Update Item',
    payload: { id, quantity },
  };
}

export function removeItem(id: number): ActionBase<CART_ACTION_TYPES, number> {
  return {
    type: '[CART] Remove Item',
    payload: id,
  };
}

export function loadItems(): ActionBase<CART_ACTION_TYPES, any> {
  return {
    type: '[CART] Load Items',
    payload: null,
  };
}
