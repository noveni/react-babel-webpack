import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { ServerRouter, Route, Switch, StaticRouter } from 'react-router-dom'

import { Routes } from './routes';
import { homePageReducer } from './modules/HomePage';
import { aboutPageReducer } from './modules/AboutPage'
import NotFound from './modules/core/components/404'
import MainMenu from './modules/core/components/MainMenu'



const RouteToDevelop = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} />
    )}
  />
)
// const store = createStore(combineReducers({
//   homePageReducer,
//   aboutPageReducer,
//   }),
//   composeWithDevTools(applyMiddleware(thunk))
// )



const AppRootSSR = ({ store, req, context }) => {
  console.log('AppRootSSR');
  console.log(store);
  return (
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <div>
          <MainMenu />
          <Switch>
            <Routes />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </StaticRouter>
    </Provider>
  )
}

export default AppRootSSR
