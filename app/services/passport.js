const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const TwitterStrategy = require('passport-twitter').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/user')
const Authentication = require('../controllers/authentication')

let localUrl = ''
if (process.env.NODE_ENV !== 'production'){
  localUrl = 'http://192.168.1.108:8081'
  require('dotenv').config()
}
const { SECRET_KEY, TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, TOKEN, TOKEN_SECRET } = process.env

//options for twitter Strategy
const twitterOptions = {
  consumerKey: TWITTER_CONSUMER_KEY,
  consumerSecret: TWITTER_CONSUMER_SECRET,
  callbackURL: `${localUrl}/auth/twitter/callback`
}
//create twitter Strategy
const twitterLogin = new TwitterStrategy(twitterOptions,
  function(TOKEN, TOKEN_SECRET, profile, cb) {

    const userProfile = { id:profile.id, username:profile.username, displayName:profile.displayName, img:profile._json.profile_image_url }

    User.findOne({ 'profile.id': profile.id }, (err, user) => {
      if(err) { return cb(err, false) }
      if (user) {
        return cb(null, profile)
      }
      else {
        Authentication.signup(userProfile)
        return cb(null, profile)
      }
    })
  }
)
passport.serializeUser((token, done) => {
  done(null, token);
})

passport.deserializeUser((token, done) => {

  User.findOne({ token }, (err, user) => {

      if(!err) done(null, user)
      else done(err, null)
    })
})


//tell passport to use these Strategies
passport.use(twitterLogin)
