//commons css
import 'antd/dist/antd.css';
import 'commons/utils/index.scss';
import GlobalLoading from 'components/Loading/Global';
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
        <div className="App">
          <Switch>
            {renderRoutes(routes)}
            <Route>
              <h1>Not found</h1>
            </Route>
          </Switch>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
