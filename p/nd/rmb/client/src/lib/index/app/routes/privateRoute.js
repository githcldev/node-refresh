import React from 'react'
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, user: user, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            user.isLoggedIn === true
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/index/login',
                    state: { from: props.location }
                }} />
        )} />
    )
}
export default PrivateRoute;