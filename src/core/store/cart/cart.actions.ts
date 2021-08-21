import { ActionBase, Product } from '../../models';

export type CART_ACTION_TYPES =
  | '[CART] Add Item'
  | '[CART] Remove Item'
  | '[CART] Load Items';

export function addItem(
  product: Product
): ActionBase<CART_ACTION_TYPES, Product> {
  return {
    type: '[CART] Add Item',
    payload: product,
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
