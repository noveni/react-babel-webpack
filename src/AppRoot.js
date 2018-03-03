import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'


import configureStore from './configureStore'
import Main from './Main'

const store = configureStore()

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
