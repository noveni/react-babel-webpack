/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for the app.
 *
 */
import { addLocaleData } from 'react-intl'

import enLocaleData from 'react-intl/locale-data/en'
import ruLocaleData from 'react-intl/locale-data/ru'

import enTranslationMessages from '../translations/en.json'
import ruTranslationMessages from '../translations/ru.json'

addLocaleData(enLocaleData)
addLocaleData(ruLocaleData)

const DEFAULT_LOCALE = 'en'

export const appLocales = [
  'en',
  'ru'
]

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {}
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key]
    return Object.assign(formattedMessages, { [key]: formattedMessage })
  }, {})
}

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  ru: formatTranslationMessages('ru', ruTranslationMessages),
}
