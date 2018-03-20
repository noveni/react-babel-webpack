import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'


import { DEFAULT_LOCALE } from './constants'
import { translationMessages } from './i18n'

import configureStore from './configureStore'
import LanguageProvider from './modules/LanguageProvider'
import Main from './Main'

const locale = DEFAULT_LOCALE
const store = configureStore()

const AppRoot = () => {
  return (
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </LanguageProvider>
    </Provider>
  )
}

export default AppRoot
