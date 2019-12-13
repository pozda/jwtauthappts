import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthService from 'services/auth/AuthService'
// @ts-ignore
// eslint-disable-next-line react/prop-types
const AuthenticatedRoute = ({component: Component, ...rest}) => (
    <Route 
        {...rest}
        render={props => 
            AuthService.isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: 'login'
                    }} 
                />
            )
        }
    />
)

export default AuthenticatedRoute