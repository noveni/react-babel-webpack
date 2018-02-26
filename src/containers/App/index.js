import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'

import Nav from '../../components/Nav'
import Home from '../Home'
import Blog from '../Blog'
import Faq from '../FAQ'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Gorilla MLP</h1>
        <Nav />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/faq" component={Faq} />
        </div>
      </div>
    )
  }
}