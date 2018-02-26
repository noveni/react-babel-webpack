import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class NavLink extends React.Component {
  render() {
    const title = this.props.title
    const to = this.props.to
    return (
      <li>
        <Link to={to}>{title}</Link>
      </li>
    )
  }
}

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}