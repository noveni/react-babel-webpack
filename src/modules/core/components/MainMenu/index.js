import React from 'react'
import MainMenuLink from './../MainMenuLink'

const MainMenu = () => (
  <ul>
    <MainMenuLink title="Home" to="/" />
    <MainMenuLink title="About" to="/about" />
    <MainMenuLink title="Russe" to="/ru" />
  </ul>
)

export default MainMenu
