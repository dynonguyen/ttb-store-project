//commons css
import 'antd/dist/antd.css';
import 'commons/utils/index.scss';
import ContactIcon from 'components/ContactIcon';
import FooterView from 'components/FooterView';
import HeaderView from 'components/HeaderView';
import GlobalLoading from 'components/Loading/Global';
import NotFound from 'components/NotFound';
import ScrollTo from 'components/ScrollTo';
//configuration
import 'configs/message.config';
import routesConfig from 'configs/routesConfig';
//React
import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import authActions from 'reducers/auth';
import userActions from 'reducers/user';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authenticate.isAuth);
  const { renderRoutes, routes } = routesConfig;

  useEffect(() => {
    //authentication
    dispatch(authActions.getIsAuth());
    return () => {};
  }, []);

  useEffect(() => {
    //get user -> store redux
    if (isAuth) dispatch(userActions.getUserRequest());
    return () => {};
  }, [isAuth]);

  //rendering...
  return (
    <BrowserRouter>
      <Suspense fallback={<GlobalLoading />}>
        <div className="App" id="app">
          <HeaderView />
          <ScrollTo />
          <ContactIcon />
          <Switch>
            {renderRoutes(routes)}
            <Route>
              <NotFound />
            </Route>
          </Switch>

          <FooterView />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
