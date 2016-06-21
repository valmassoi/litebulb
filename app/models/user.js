const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

// Define our model
const userSchema = new Schema({
  profile: { id:{ type: String, unique: true }, username:String, displayName:String, img:String },
  bulbs: Array
})

// Create the model class
const ModelClass = mongoose.model('user', userSchema)

// Export the model
module.exports = ModelClass
