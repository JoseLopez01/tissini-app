import { Redirect, Route } from 'react-router-dom'
import { RouterProps } from '../core/models/router.model'

export default function PrivateRouter({
  isAuthenticated,
  component: Component,
  ...rest
}: RouterProps) {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        !isAuthenticated ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}
