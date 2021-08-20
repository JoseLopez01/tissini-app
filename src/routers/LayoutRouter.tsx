import { Route, Switch } from 'react-router-dom';

import Categories from '../pages/categories/Categories';
import FooterBar from '../core/layout/FooterBar';
import NavBar from '../core/layout/NavBar';

export default function LayoutRouter() {
  return (
    <>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Categories} />
        </Switch>
      </div>
      <FooterBar />
    </>
  );
}
