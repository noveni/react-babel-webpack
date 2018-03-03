import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './modules/HomePage'
import AboutPage from './modules/AboutPage'
import NotFound from './modules/core/components/404'

export const routes = [
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
