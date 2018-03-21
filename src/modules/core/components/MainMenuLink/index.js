import React from 'react'
import PropTypes from 'prop-types'

import StyledLink from './StyledLink'

const MainMenuLink = ({ title, to }) => (
  <li>
    <StyledLink to={to}>{title}</StyledLink>
  </li>
)

MainMenuLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default MainMenuLink
