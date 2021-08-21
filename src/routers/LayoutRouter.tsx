import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import Categories from '../pages/categories/Categories';
import Cart from '../pages/cart/Cart';
import { FooterBar, NavBar } from '../core/layout';
import { customStyles } from '../core/constants';
import { RootState } from '../core/store/store';
import ProductForm from '../pages/categories/components/ProductForm';
import { closeModal } from '../core/store/ui/ui.actions';
import { useEffect } from 'react';
import { loadItems } from '../core/store/cart/cart.actions';

Modal.setAppElement('#root');

export default function LayoutRouter() {
  const dispatch = useDispatch();
  const { showModal } = useSelector((state: RootState) => state.ui);
  const { items } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const recoveredItems = localStorage.getItem('items');
    if (recoveredItems) {
      dispatch(loadItems(JSON.parse(recoveredItems)));
    }
  }, [dispatch]);

  function handleOnClose() {
    dispatch(closeModal());
  }
  
  return (
    <>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
      <FooterBar />
      <Modal
        style={customStyles}
        isOpen={showModal}
        onRequestClose={handleOnClose}
      >
        <div>
          <ProductForm />
        </div>
      </Modal>
    </>
  );
}
