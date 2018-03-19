import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import StyledLink from './StyledLink'

class LocaleButton extends React.Component {
  handleClick() {
    console.log('Hello');
  }
  render() {
    const { locale, onToggle } = this.props
    return (
      <button onClick={onToggle}>
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