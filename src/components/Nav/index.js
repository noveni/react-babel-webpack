import React from 'react'

import NavLink from '../NavLink'

export default class Nav extends React.Component {

  render() {
    return (
      <ul>
        <NavLink title='Home' />
        <NavLink title='Blog' />
        <NavLink title='FAQ' />
      </ul>
    );
  }
}