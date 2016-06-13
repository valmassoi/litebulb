const jwt = require('jwt-simple')
const User = require('../models/user')

if (process.env.NODE_ENV !== 'production')
  require('dotenv').config()
const { SECRET_KEY } = process.env

function tokenForUser(user) {
  const timestamp = Date.now()
  return jwt.encode({ sub: user.id, iat: timestamp }, SECRET_KEY) //dont use email,,,, sub is the subject of the token,,,, iat: issue at time
}

exports.signin = (req, res, next) => {
  //user has email and pass authed, give them a token
  res.send({ token: tokenForUser(req.user), profile: req.user.profile })
}

exports.signup = (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password' })
  }

  User.findOne({ email }, (err, existingUser) => { //see if user with given email exists
    if(err) {return next(err)}

    if(existingUser) { //if does: return error
      return res.status(422).send({ error: 'Email is in use' })
    }

    const user = new User({ //else create and save record
      email,
      password
    })

    user.save((err) => {
      if(err) {return next(err)}
      res.json({ token: tokenForUser(user) })
    })
  })
}

exports.profile  = (email, formProps, res, next) => {

  User.findOne({ email }, (err, user) => {
    if (err) { return next(err); }
    let message = 'Got User'
    if (formProps) {
      user.profile.name = (formProps.name)?formProps.name:user.profile.name
      user.profile.city = (formProps.city)?formProps.city:user.profile.city
      user.profile.state = (formProps.state)?formProps.state:user.profile.state
      user.save( err => {
        if (err) { return next(err) }
      })
      message = 'Profile updated'
    }
    res.send({ message, profile: user.profile })
  })
}
