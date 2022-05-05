import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ user, routeProps, children, roles }) => {
  return (
    <Route {...routeProps}>
      {user && roles.includes(user.role) ? children : <Redirect to="/" />}
    </Route>
  );
};

export default PrivateRoute;
