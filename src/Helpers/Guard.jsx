import React from 'react';
import {
    Redirect,
    Route } from "react-router-dom";

export default ({ auth, data, hidden, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            !hidden || (auth && auth.isLoggedIn) ? (
                <Component {...props} auth={ auth } data={data} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);
