import { constants } from './actions';

const {
  FETCH_HOME_PAGE_DATA,
  RECEIVE_HOME_PAGE_DATA,
  INVALID_HOME_PAGE_DATA
} = constants

const initialState = {
  isFetching: false,
  error: false,
  homePageData: false
}

export function homePageReducer(state = initialState, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case FETCH_HOME_PAGE_DATA:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_HOME_PAGE_DATA:
      return {
        ...state,
        isFetching: false,
        homePageData: action.payload
      }
    case INVALID_HOME_PAGE_DATA:
      return {
        ...state,
        isFetching: false,
        error: false
      }
    default:
      return state;
  }
}