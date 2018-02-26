import React from 'react'
import ReactDOM from 'react-dom'

import Nav from '../../components/Nav'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Gorilla MLP</h1>
        <Nav />
      </div>
    )
  }
}