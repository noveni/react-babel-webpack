import React from 'react'

import NavLink from '../NavLink'

export default class Nav extends React.Component {

  render() {
    return (
      <ul>
        <NavLink title='Home' to="/" />
        <NavLink title='Blog' to="/blog" />
        <NavLink title='FAQ' to="/faq" />
      </ul>
    )
  }
}