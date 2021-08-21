import { ActionBase, CartItem, Product } from '../../models';

export type CART_ACTION_TYPES =
  | '[CART] Add Item'
  | '[CART] Remove Item'
  | '[CART] Load Items'
  | '[CART] Update Item';

export function addItem(
  item: CartItem
): ActionBase<CART_ACTION_TYPES, CartItem> {
  return {
    type: '[CART] Add Item',
    payload: item,
  };
}

export function updateItem(
  item: CartItem
): ActionBase<CART_ACTION_TYPES, CartItem> {
  return {
    type: '[CART] Update Item',
    payload: item,
  };
}

export function removeItem(id: number): ActionBase<CART_ACTION_TYPES, number> {
  return {
    type: '[CART] Remove Item',
    payload: id,
  };
}

export function loadItems(
  items: Product[]
): ActionBase<CART_ACTION_TYPES, Product[]> {
  return {
    type: '[CART] Load Items',
    payload: items,
  };
}
