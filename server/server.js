const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

// Server run from root of project
express()
  .use(express.static(path.join('build')))
  .get('*', (req, res) => res.sendfile('build/index.html'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))