import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

class LanguageProvider extends React.Component {
  render() {
    return (
      <IntlProvider locale={this.props.locale} messages={this.props.messages[this.props.locale]}>
        {React.Children.only(this.props.children)}
      </IntlProvider>
    )
  }
}

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