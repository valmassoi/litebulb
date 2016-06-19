'use strict'

const Authentication = require('../controllers/authentication')
const passportService = require('../services/passport')
const passport = require('passport')
const url  = require('url')

const requireAuth = passport.authenticate('jwt', { session: false })//false is to use tokens over cookies

module.exports = function(app) {
  app.get('/', requireAuth, (req, res) => {
    res.send({ message: 'testing secret code is test123' })
  })

  app.get('/auth/twitter', passport.authenticate('twitter'))

  app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/signin' }), (req, res) => {
    var url_data = url.parse(req.url, true)
    var query = url_data.query
    console.log(query);
    res.redirect('http://192.168.1.108:8080/signin?twitter_token='+query.oauth_token) //TODO
  })

  app.post('/profile', requireAuth, (req, res, next) => {
    // Authentication.profile(req.user.email, null, res, next)
  })

  app.get('/profile', requireAuth, (req, res, next) => {
    console.log("req");
    res.send({ message: 'testing profile' })
    // Authentication.profile(req.user.email, null, res, next)
  })

}
