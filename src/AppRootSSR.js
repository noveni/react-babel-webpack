import React from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

import LanguageProvider from './modules/LanguageProvider'
import { changeLocale } from './modules/LanguageProvider/actions'
import Main from './Main'

import { translationMessages, appLocales } from './i18n'


const AppRootSSR = ({ store, req, context }) => { // eslint-disable-line react/prop-types
  const maybeLocalPath = req.url.replace(/\//g, '')
  if (appLocales.find(locale => locale === maybeLocalPath)) {
    store.dispatch(changeLocale(maybeLocalPath))
  }
  return (
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <StaticRouter
          location={req.url}
          context={context}
        >
          <Main />
        </StaticRouter>
      </LanguageProvider>
    </Provider>
  )
}

export default AppRootSSR
