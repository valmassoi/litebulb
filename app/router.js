const auth = require('./routes/auth')
const bulb = require('./routes/bulbs')

const router = require('express').Router()

module.exports = function(app) {
  main: router,
  auth(app),
  bulb(app)
}
