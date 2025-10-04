const fetch = require('node-fetch');

'use strict'
process.title = 'AnimeBot'

const app = require('./src/Application')

app
  .register()
  .then(() => {
    app.connect()
  })
  .catch(err => {
    console.error(err)
  })
