import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'


const LanguageProvider = ({ locale, messages, children }) => (
  <IntlProvider locale={locale} messages={messages[locale]}>
    {React.Children.only(children)}
  </IntlProvider>
)

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
}

function mapStateToProps(state) {
  return {
    ...state,
    locale: state.languageProviderReducer.locale
  }
}

export default connect(mapStateToProps)(LanguageProvider)
