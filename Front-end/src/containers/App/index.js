//commons css
import 'commons/utils/index.scss';
import 'antd/dist/antd.css';

//configuration
import 'configs/message.config';

//React
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routesConfig from 'configs/routesConfig';

function App() {
  const { renderRoutes, routes } = routesConfig;
  //rendering...
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading ...</h1>}>
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
