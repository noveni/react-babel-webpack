import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './containers/App';
import Nav from './components/Nav';
import { routes } from './routes';

const RouteToDevelop = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} />
    )}
  />
)

ReactDOM.render(
  (
    <BrowserRouter>
      <div>
        <App />
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              exact={route.exact ? true : false}
              path={route.path}
              render={props => (
                <route.component {...props} />
              )}
            />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  ), document.getElementById('app'))
  // <div>
  //   <Nav />
  //   {routes.map((route, i) => <RouteToDevelop key={i} {...route } />)}
  // </div>