import { constants } from './actions';
import { DEFAULT_LOCALE } from '../../constants'

const {
  CHANGE_LOCALE
} = constants

const initialState = {
  locale: DEFAULT_LOCALE,
}

export function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return {
        ...state,
        locale: action.locale
      }
    default:
      return state;
  }
}