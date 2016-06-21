'use strict'

const Bulb = require('../controllers/bulb')

module.exports = function(app) {

  app.post('/bulbs/bulb', (req, res) => {
    let { bulb } = req.body
    let profile = req.headers.authorization
    Bulb.add(profile,bulb,res)
  })

  app.delete('/bulbs/bulb/:id', (req, res) => {
    let { id } = req.params
    let profile = req.headers.authorization
    Bulb.delete(profile,id,res)
  })

}
