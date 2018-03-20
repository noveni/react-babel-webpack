import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import StyledLink from './StyledLink'

class LocaleButton extends React.Component {
  render() {
    const { locale, onToggle, newLocale } = this.props
    return (
      <button onClick={onToggle} value={newLocale}>
        Change Lang
      </button>
    )
  }
}

LocaleButton.propTypes = {
  locale: PropTypes.string.isRequired,
  onToggle: PropTypes.func,
}

export default LocaleButton