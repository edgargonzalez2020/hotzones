import React from 'react';
import {Route, Redirect} from 'react-router-dom';
export default ({ component: C, isAuthenticated, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      !isAuthenticated
        ? <C {...props}/>
        : <Redirect to="/home" />}
  />;