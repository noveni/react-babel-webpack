import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl';

import { DEFAULT_LOCALE } from './constants'
import { translationMessages } from './i18n'

import configureStore from './configureStore'
import Main from './Main'

const store = configureStore()
const locale = DEFAULT_LOCALE

const AppRoot = () => {
  return (
    <Provider store={store}>
      <IntlProvider locale={locale} messages={translationMessages}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  )
}

export default AppRoot
