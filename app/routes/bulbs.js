'use strict'

module.exports = function(app) {

  // app.get('/bulbs/bulb'

  app.post('/bulbs/bulb', (req, res) => {
    console.log(req.body.bulb)
    //TODO save to mongo
    res.end()
  })


}
