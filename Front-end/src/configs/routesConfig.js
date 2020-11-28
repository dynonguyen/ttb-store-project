import React from 'react';
import { Route } from 'react-router-dom';
import constants from 'constants/index.js';
import ProductView from 'components/ProductView';

// lazy loading
const SignUp = React.lazy(() => import('containers/SignUp'));
const Login = React.lazy(() => import('containers/Login'));
const ForgotPassword = React.lazy(() =>
  import('containers/Login/ForgotPassword'),
);

const routes = [
  {
    path: '/',
    exact: true,
    main: () => (
      <ProductView
        name={`Laptop Acer Swift 3 SF314-58-39BZ (NX.HPMSV.007) (14" FHD/i3-10110U/8GB/512GB SSD/Intel UHD/Win10/1.5kg)`}
        avtUrl="https://lh3.googleusercontent.com/r1H1yzDXggB-8xGThOHFOVbNFN4bjBtYSA-YlnjlW3rYE-zoJUbFVe-EPvNd8CMJaE04XH2QBjXN96y-y98=w500-rw"
        price={7900000}
        discount={10}
        stock={3}
      />
    ),
  },
  {
    path: constants.ROUTES.SIGNUP,
    exact: true,
    main: () => <SignUp />,
  },
  {
    path: constants.ROUTES.LOGIN,
    exact: true,
    main: () => <Login />,
  },
  {
    path: constants.ROUTES.FORGOT_PASSWORD,
    exact: true,
    main: () => <ForgotPassword />,
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
