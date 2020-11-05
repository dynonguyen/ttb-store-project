//commons css
import 'antd/dist/antd.css';
//React
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routesConfig from 'configs/routesConfig';

function App() {
  const { renderRoutes, routes } = routesConfig;
  console.log(routes);
  //rendering...
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {renderRoutes(routes)}
          <Route>
            <h1>Not found</h1>
          </Route>
        </Switch>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
