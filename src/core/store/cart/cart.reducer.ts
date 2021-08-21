import { ActionBase, CartItem } from '../../models';
import { CART_ACTION_TYPES } from './cart.actions';

export interface CartState {
  items: CartItem[];
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
        items: state.items.filter(
          ({ product }) => product.id !== action.payload
        ),
      };
    case '[CART] Load Items':
      return {
        ...state,
        items: action.payload,
      };
    case '[CART] Update Item':
      return {
        ...state,
        items: [
          ...state.items.filter(
            ({ product }) => product.id !== action.payload.product.id
          ),
          ...[action.payload]
        ],
      };
    default:
      return state;
  }
}
