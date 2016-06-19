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


// options for jwt Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: TWITTER_CONSUMER_SECRET//SECRET_KEY
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
    const userProfile = { id:profile.id, username:profile.username, displayName:profile.displayName, img:profile._json.profile_image_url }

    User.findOne({ profile: profile.id }, (err, user) => {
      if(err) { return cb(err, false) }
      if (user) {
        console.log(user)
        return cb(null, profile)
      }
      else {
        console.log("no user")
        Authentication.signup(userProfile)//todo add more info
        return cb(null, profile)
      }
    })
  }
)
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  console.log("id:", id);
  User.findById(id, function(err, user){
    console.log(user);
      if(!err) done(null, user);
      else done(err, null);
    });
});


//tell passport to use these Strategies
passport.use(twitterLogin)
passport.use(jwtLogin)
