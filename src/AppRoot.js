import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { homePageReducer } from './modules/HomePage'
import { aboutPageReducer } from './modules/AboutPage'
import Main from './Main'

const store = createStore(combineReducers({
  homePageReducer,
  aboutPageReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

const AppRoot = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  )
}

export default AppRoot
