import HomePage from './modules/HomePage'
import Blog from './containers/Blog'
import Faq from './containers/FAQ'

export const routes = [
  {
    exact: true,
    path: "/",
    component: HomePage
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/faq",
    component: Faq
  }
]