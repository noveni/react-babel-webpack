import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import AppRootSSR from './../src/AppRootSSR'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { homePageReducer } from './../src/modules/HomePage'
import { shouldFetchHomePageData } from './../src/modules/HomePage/actions'
import { aboutPageReducer } from './../src/modules/AboutPage'
const PORT = process.env.PORT || 5000

const store = createStore(combineReducers({
  homePageReducer,
  aboutPageReducer,
  }),
  applyMiddleware(thunk)
)
store.dispatch(
  shouldFetchHomePageData()
).then(() => {

  // Server run from root of project
  express()
    .use(express.static(path.join('build')))
    .get('*', (req, res) => {
      res.write("<!DOCTYPE html><html><head><title>My Page</title></head><body>");
      res.write("<div id='app'>");
      res.write(ReactDOMServer.renderToStaticMarkup(<AppRootSSR store={store} req={req} context={{}} />))
      res.write("</div>");
      res.write("<script src='/app.js'></script>");
      res.write("</body></html>");
      res.end();
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))
})
