import React from 'react'
import MainMenuLink from './../MainMenuLink'


class MainMenu extends React.Component {
  render() {
    return (
      <ul>
        <MainMenuLink title='Home' to="/" />
        <MainMenuLink title='About' to="/about" />
        <MainMenuLink title='Russe' to="/ru" />
      </ul>
    )
  }
}

export default MainMenu