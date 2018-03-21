import React from 'react'
import PropTypes from 'prop-types'

import StyledLink from './StyledLink'

class MainMenuLink extends React.Component {
  render() {
    const {
      title,
      to
    } = this.props

    return (
      <li>
        <StyledLink to={to}>{title}</StyledLink>
      </li>
    )
  }
}

MainMenuLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default MainMenuLink