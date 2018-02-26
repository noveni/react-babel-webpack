import React from 'react';
import PropTypes from 'prop-types';

export default class NavLink extends React.Component {
  render() {
    const title = this.props.title
    return (
      <li>
        <a>{title}</a>
      </li>
    )
  }
}

NavLink.propTypes = {
  title: PropTypes.string.isRequired
}