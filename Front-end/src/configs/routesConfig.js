import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import constants from 'constants/index.js';
import HeaderView from 'components/HeaderView/index';
const { Header } = Layout;
import AdminPage from 'containers/AdminPage';
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
      <Layout>
        <HeaderView />
      </Layout>
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
    path: '/admin',
    exact: true,
    main: () => <AdminPage />,
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
