import React from 'react'
import MainMenuLink from './../MainMenuLink'


class MainMenu extends React.Component {
  render() {
    return (
      <ul>
        <MainMenuLink title='Home' to="/" />
        <MainMenuLink title='About' to="/about" />
      </ul>
    );
  }
}

export default MainMenu