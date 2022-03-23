'use strict'

const {db} = require('./db')
const app = require('./app')
const PORT = 1337

db.sync()
  .then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`on port ${PORT}`))
  })