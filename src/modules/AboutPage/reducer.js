import { constants } from './actions'

const {
  FETCH_ABOUT_PAGE_DATA,
  RECEIVE_ABOUT_PAGE_DATA,
  INVALID_ABOUT_PAGE_DATA
} = constants

const initialState = {
  isFetching: false,
  error: false,
  aboutPageData: false
}

export function aboutPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ABOUT_PAGE_DATA:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_ABOUT_PAGE_DATA:
      return {
        ...state,
        isFetching: false,
        aboutPageData: action.payload
      }
    case INVALID_ABOUT_PAGE_DATA:
      return {
        ...state,
        isFetching: false,
        error: false
      }
    default:
      return state
  }
}