import { BrowserRouter as Router, Switch } from 'react-router-dom';

import LayoutRouter from './LayoutRouter';
import Login from '../pages/login/Login';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter exact path="/login" isAuthenticated={false} component={Login} />
          <PrivateRouter exact path="/" isAuthenticated={true} component={LayoutRouter} />
        </Switch>
      </div>
    </Router>
  )
}
