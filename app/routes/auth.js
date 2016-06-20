'use strict'

const Authentication = require('../controllers/authentication')
const passportService = require('../services/passport')
const passport = require('passport')
const url  = require('url')

const requireAuth = passport.authenticate('jwt', { session: false })//false is to use tokens over cookies

module.exports = function(app) {

  app.get('/auth/twitter', passport.authenticate('twitter'))

  app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/signin' }), (req, res) => {
    let user_id = req.user.id //TODO bcrypt
    res.redirect('http://192.168.1.108:8080/signin?twitter_token='+user_id) //TODO bcrypt id
  })

  app.get('/profile', (req, res, next) => {
    let token = req.headers.authorization
    let id = token// decrypt token to id
    Authentication.profile(id, res, next)
  })
  app.post('/profile', (req, res, next) => {
    // Authentication.profile(req.user.email, null, res, next)
  })


}
