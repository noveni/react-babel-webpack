import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeLocale } from '../LanguageProvider/actions'

import LocaleButton from '../core/components/LocaleButton'

class LocaleToggle extends React.Component {
  render() {
    return (
      <LocaleButton newLocale='ru' locale={this.props.locale} onToggle={this.props.onLocaleToggle} />
    )
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return { ...state }
}

function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: (evt) => dispatch(changeLocale(evt.target.value)),
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle)