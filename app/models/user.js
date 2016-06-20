const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

// Define our model
const userSchema = new Schema({
  token: String, // NOTE better to decode token
  profile: { id:{ type: String, unique: true }, username:String, displayName:String, img:String },
  bulbs: Array
})

// On save Hook, encrypt password
userSchema.pre('save', function(next) { // run before save DONT DO ARROW FUNCTION bind this
  const user = this

  if (!user.isModified('password'))
    return next()

  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err) }
      user.password = hash
      next()
    })
  })
})

// Create the model class
const ModelClass = mongoose.model('user', userSchema)

// Export the model
module.exports = ModelClass
