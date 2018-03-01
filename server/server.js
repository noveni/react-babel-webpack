import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import AppRootSSR from './../src/AppRootSSR'

const PORT = process.env.PORT || 5000


// Server run from root of project
express()
  .use(express.static(path.join('build')))
  .get('*', (req, res) => {
    res.write("<!DOCTYPE html><html><head><title>My Page</title></head><body>");
    res.write("<div id='app'>");
    res.write(ReactDOMServer.renderToStaticMarkup(<AppRootSSR req={req} context={{}} />))
    res.write("</div>");
    res.write("<script src='/app.js'></script>");
    res.write("</body></html>");
    res.end();
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
