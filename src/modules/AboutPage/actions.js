// import thunk from 'redux-thunk'
import { getJsonPlaceholder } from '../../data'

export const constants = {
  FETCH_ABOUT_PAGE_DATA: 'FETCH_ABOUT_PAGE_DATA',
  RECEIVE_ABOUT_PAGE_DATA: 'RECEIVE_ABOUT_PAGE_DATA',
  INVALID_ABOUT_PAGE_DATA: 'INVALID_ABOUT_PAGE_DATA'
}
const {
  FETCH_ABOUT_PAGE_DATA,
  RECEIVE_ABOUT_PAGE_DATA,
  INVALID_ABOUT_PAGE_DATA
} = constants

const fetchAboutPageData = (url) => {
  return {
    type: FETCH_ABOUT_PAGE_DATA,
    url: url,
  }
}

const receiveAboutPageData = (response) => {
  return {
    type: RECEIVE_ABOUT_PAGE_DATA,
    payload: response
  }
}

const InvalidAboutPageData = (error) => {
  return {
    type: INVALID_ABOUT_PAGE_DATA,
    error: error
  }
}

// export function shouldFetchAboutPageData() {

//   // Invert control!
//   // Return a function that accepts `dispatch` so we can dispatch later.
//   // Thunk middleware knows how to turn thunk async actions into actions.

//   return function (dispatch) {
//     return getJsonPlaceholder('https://jsonplaceholder.typicode.com/posts').then(
//       response => dispatch(receiveAboutPageData(response)),
//       error => dispatch(InvalidAboutPageData(error))
//     );
//   };
// }

export const shouldFetchAboutPageData = () => {
  return async (dispatch) => {
    dispatch(fetchAboutPageData())

    try {
      const response = await getJsonPlaceholder('https://jsonplaceholder.typicode.com/posts')
      dispatch(receiveAboutPageData(response))
    } catch (e) {
      dispatch(InvalidAboutPageData(e))
    }

    // console.log('state: ', getState())
  }
}

