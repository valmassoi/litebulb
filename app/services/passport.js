const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const TwitterStrategy = require('passport-twitter').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')
const User = require('../models/user')

let localUrl = ''
if (process.env.NODE_ENV !== 'production'){
  localUrl = 'http://192.168.1.108:8081'
  require('dotenv').config()
}
const { SECRET_KEY, TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, TOKEN, TOKEN_SECRET } = process.env


// create local Strategy
const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // verify email and password
  User.findOne({ email }, (err, user) => {
    if(err)
      return done(err)
    if(!user)
      return done(null, false)

    user.comparePassword(password, (err, isMatch) => {
      if(err)
        return done(err)
      if(!isMatch)
        return done(null, false)
      return done(null, user)
    })
  })

})

// options for jwt Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: SECRET_KEY
}

//create jwt Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => { //payload is decoded token
  //see if user id in payload exists in db, then call done with user object, else done with no user
  User.findById(payload.sub, (err, user) => {
    if(err) { return done(err, false) }
    if (user)
      done(null, user)
    else
      done(null, false)
  })
})

//options for twitter Strategy
const twitterOptions = {
  consumerKey: TWITTER_CONSUMER_KEY,
  consumerSecret: TWITTER_CONSUMER_SECRET,
  callbackURL: `${localUrl}/auth/twitter/callback`
}
//create twitter Strategy
const twitterLogin = new TwitterStrategy(twitterOptions,
  function(TOKEN, TOKEN_SECRET, profile, cb) {
    console.log(profile.id, profile.username, profile.displayName, profile._json.profile_image_url)
    User.findById({ twitterId: profile.id }, (err, user) => {

      if (user)
        console.log(user)
      else
        console.log("no user")
      return cb(null, profile)
    })
  }
)
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


//tell passport to use these Strategies
passport.use(twitterLogin)
passport.use(jwtLogin)
passport.use(localLogin)
