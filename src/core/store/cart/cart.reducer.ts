import { ActionBase, Product } from '../../models';
import { CART_ACTION_TYPES } from './cart.actions';

export interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

export function cartReducer(
  state = initialState,
  action: ActionBase<CART_ACTION_TYPES, any>
): CartState {
  switch (action.type) {
    case '[CART] Add Item':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case '[CART] Remove Item':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case '[CART] Load Items':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
