import { BrowserRouter as Router, Switch } from 'react-router-dom';

import LayoutRouter from './LayoutRouter';
import Login from '../pages/login/Login';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { useSelector } from 'react-redux';
import { RootState } from '../core/store/store';

export default function AppRouter() {

  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter exact path="/login" isAuthenticated={isAuthenticated} component={Login} />
          <PrivateRouter path="/" isAuthenticated={isAuthenticated} component={LayoutRouter} />
        </Switch>
      </div>
    </Router>
  )
}
