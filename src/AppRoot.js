import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { routes } from './routes';
import { homePageReducer } from './modules/HomePage'


const RouteToDevelop = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} />
    )}
  />
)

const store = createStore(
  homePageReducer,
  applyMiddleware(thunk)
)

const AppRoot = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
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
    </Provider>
  )
}

export default AppRoot
