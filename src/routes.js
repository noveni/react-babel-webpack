import HomePage from './modules/HomePage'
import AboutPage from './modules/AboutPage'

export const routes = [
  {
    exact: true,
    path: "/",
    component: HomePage
  },
  {
    path: "/about",
    component: AboutPage,
  },
]