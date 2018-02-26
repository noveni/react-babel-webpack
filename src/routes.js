import Home from './containers/Home'
import Blog from './containers/Blog'
import Faq from './containers/FAQ'

export const routes = [
  {
    exact: true,
    path: "/",
    component: Home
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