import { Route, Switch } from 'react-router-dom';
import Categories from '../pages/categories/Categories';

export default function LayoutRouter() {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/" component={Categories} />
        </Switch>
      </div>
    </>
  );
}
