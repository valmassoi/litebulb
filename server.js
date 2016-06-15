'use strict'

const express = require('express')
const http = require('http')
const router = require('./app/router')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const passport = require('passport')

const app = express()

const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27018/data'
mongoose.connect(dbUrl)

app.use(express.static(__dirname+'/src/'))
if (process.env.NODE_ENV !== 'production'){
  const morgan = require('morgan')
  app.use(morgan('dev')) //combined short tiny
  require('dotenv').config()
}
const { SECRET_KEY } = process.env
app.use(cors())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: '*/*' }))
app.enable('trust proxy')

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())
router(app)


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './src/index.html'))
})

const PORT = process.env.PORT || 8081

const server = http.Server(app)
server.listen(PORT, () => {
  console.log('Server Running on PORT: ' + PORT)
})
