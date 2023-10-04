import Cookies from 'js-cookie';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export const PrivateRoute = (props: RouteProps) => {
  // Check of user is logged in
  // If yes, show route
  // Otherwise, redirect to login page
  const token = Cookies.get('token');
  const isLoggedIn = Boolean(token);
  if (!isLoggedIn) return <Redirect to="/login" />;

  return <Route {...props} />;
};
