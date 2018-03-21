import React from 'react'
import PropTypes from 'prop-types'

const LocaleButton = ({ onToggle, newLocale }) => (
  <button onClick={onToggle} value={newLocale}>
    Change Lang
  </button>
)

LocaleButton.propTypes = {
  newLocale: PropTypes.string,
  onToggle: PropTypes.func,
}

export default LocaleButton
