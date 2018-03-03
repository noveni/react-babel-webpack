import React from 'react'
import { Provider } from 'react-redux'
import { ServerRouter, StaticRouter } from 'react-router-dom'

import Main from './Main'



const AppRootSSR = ({ store, req, context }) => {
  return (
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <Main />
      </StaticRouter>
    </Provider>
  )
}

export default AppRootSSR
