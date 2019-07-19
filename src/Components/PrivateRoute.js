import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Dimmer, Loader } from 'semantic-ui-react'

function PrivateRoute({ component: Component, ...rest }) {
  const isLoggedIn = useAuth()

  if (isLoggedIn === null) {
    return (
      <Dimmer active>
        <Loader size='massive'>Loading</Loader>
      </Dimmer>
    )
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (isLoggedIn === null) {
        }

        return isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: props.location }
            }}
          />
        )
      }}
    />
  )
}

export default PrivateRoute
