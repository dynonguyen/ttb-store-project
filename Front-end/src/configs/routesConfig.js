import React from 'react';
import { Route } from 'react-router-dom';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <h1>Home Website</h1>,
  },
];

// render routes
const renderRoutes = (routes) => {
  return routes.map((route, index) => {
    const { path, exact, main } = route;
    return <Route key={index} path={path} exact={exact} component={main} />;
  });
};

export default {
  routes,
  renderRoutes,
};
