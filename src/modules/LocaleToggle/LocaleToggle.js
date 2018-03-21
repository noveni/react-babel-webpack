import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeLocale } from '../LanguageProvider/actions'

import LocaleButton from '../core/components/LocaleButton'

const LocaleToggle = ({ locale, onLocaleToggle }) => (
  <LocaleButton newLocale="ru" locale={locale} onToggle={onLocaleToggle} />
)

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return { ...state }
}

function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: evt => dispatch(changeLocale(evt.target.value)),
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle)
