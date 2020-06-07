import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthService from '../services/auth-service/AuthService'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, ...rest }) => {
 return (
  <Route
   {...rest}
   render={props =>
    AuthService.isAuthenticated() ? (
     <Component {...props} />
    ) : (
      <Redirect
       to={{
        pathname: '/',
        state: { from: props.location },
       }}
      />
     )
   }
  />
 )
}

PrivateRoute.propTypes = {
 location: PropTypes.object,
 component: PropTypes.any,
}

export default PrivateRoute