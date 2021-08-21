import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './auth/auth.reducer';
import { cartReducer } from './cart/cart.reducer';
import { categoriesReducer } from './category/category.reducer';
import { uiReducer } from './ui/ui.reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootStore = combineReducers({
  category: categoriesReducer,
  cart: cartReducer,
  ui: uiReducer,
  auth: authReducer,
});

export const store = createStore(
  rootStore,
  composeEnhancers(applyMiddleware(thunk))
);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
