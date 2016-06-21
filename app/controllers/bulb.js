const User = require('../models/user')

exports.add = (profile, bulb, res) => {
  User.findOneAndUpdate(
    { 'profile.id': profile },
    { $push: { 'bulbs': bulb } },
    {safe: true, upsert: true, new : true},
    (err) => {
      if (err) { console.log(err); }
      res.send({ add: 'success' })
    }
  )
}

exports.delete = (profile, id, res) => {
  User.findOneAndUpdate(
    { 'profile.id': profile },
    { $pull: { bulbs: { id } } },
    (err) => {
      if (err) { console.log(err); }
      res.send({ del: 'success' })
    }
  )
}
