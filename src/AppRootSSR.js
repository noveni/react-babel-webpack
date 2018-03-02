import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { ServerRouter, Route, Switch, StaticRouter } from 'react-router-dom'

import { routes } from './routes';
import { homePageReducer } from './modules/HomePage';
import { aboutPageReducer } from './modules/AboutPage'
import NotFound from './modules/core/components/404'



const RouteToDevelop = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} />
    )}
  />
)
const store = createStore(combineReducers({
  homePageReducer,
  aboutPageReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
)



const AppRootSSR = ({ req, context }) => {
  console.log('AppRootSSR');
  return (
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
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
          <Route component={ NotFound } />
        </Switch>
      </StaticRouter>
    </Provider>
  )
}

export default AppRootSSR
