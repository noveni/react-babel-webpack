import React from 'react'
import PropTypes from 'prop-types'

class LocaleButton extends React.Component {
  render() {
    const { onToggle, newLocale } = this.props
    return (
      <button onClick={onToggle} value={newLocale}>
        Change Lang
      </button>
    )
  }
}

LocaleButton.propTypes = {
  locale: PropTypes.string.isRequired,
  newLocale: PropTypes.string,
  onToggle: PropTypes.func,
}

export default LocaleButton