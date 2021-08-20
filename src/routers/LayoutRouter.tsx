import { Route, Switch } from 'react-router-dom';

import Categories from '../pages/categories/Categories';
import Cart from '../pages/cart/Cart';
import { FooterBar, NavBar } from '../core/layout';

export default function LayoutRouter() {
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
    </>
  );
}
