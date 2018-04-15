import React from 'react';
import {
  Redirect,
  Route } from "react-router-dom";

export default ({ auth, hidden, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !hidden || (auth && auth.isLoggedIn) ? (
        <Component {...props} auth={ auth } />
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
