import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getJsonPlaceholder } from '../../data';

export const constants = {
  FETCH_HOME_PAGE_DATA: 'FETCH_HOME_PAGE_DATA',
  RECEIVE_HOME_PAGE_DATA: 'RECEIVE_HOME_PAGE_DATA',
  INVALID_HOME_PAGE_DATA: 'INVALID_HOME_PAGE_DATA'
}
const {
  FETCH_HOME_PAGE_DATA,
  RECEIVE_HOME_PAGE_DATA,
  INVALID_HOME_PAGE_DATA
} = constants

const fetchHomePageData = (url) => {
  return {
    type: FETCH_HOME_PAGE_DATA,
    url: url,
  }
}

const receiveHomePageData = (response) => {
  return {
    type: RECEIVE_HOME_PAGE_DATA,
    payload: response
  }
}

const InvalidHomePageData = (error) => {
  return {
    type: INVALID_HOME_PAGE_DATA,
    error: error
  }
}

export function shouldFetchHomePageData() {

  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return function (dispatch) {
    return getJsonPlaceholder('https://jsonplaceholder.typicode.com/posts').then(
      response => dispatch(receiveHomePageData(response)),
      error => dispatch(InvalidHomePageData(error))
    );
  };
}

