import { Route, Redirect } from 'react-router-dom';

import { RouterProps } from '../core/models';

export default function PublicRouter({
  isAuthenticated,
  component: Component,
  ...rest
}: RouterProps) {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? (
          <Redirect to="/categories" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
