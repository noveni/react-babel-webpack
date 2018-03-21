import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { translationMessages } from './i18n'

import configureStore from './configureStore'
import LanguageProvider from './modules/LanguageProvider'
import Main from './Main'

const store = configureStore()

const AppRoot = () => (
  <Provider store={store}>
    <LanguageProvider messages={translationMessages}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </LanguageProvider>
  </Provider>
)

export default AppRoot
