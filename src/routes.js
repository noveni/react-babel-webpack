import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './modules/HomePage'
import AboutPage from './modules/AboutPage'
import NotFound from './modules/core/components/404'

const routesArr = [
  {
    exact: true,
    path: "/",
    component: HomePage
  },
  {
    path: "/about",
    component: AboutPage,
  }
]

export const Routes = () => {
  return routesArr.map((route, i) => (
    <Route
      key={i}
      exact={route.exact ? true : false}
      path={route.path}
      render={props => (
        <route.component {...props} />
      )}
    />
  ))
}