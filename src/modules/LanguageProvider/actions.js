// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

export const constants = {
  CHANGE_LOCALE,
}

const {
  CHANGE_LOCALE
} = constants

export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale
  }
}