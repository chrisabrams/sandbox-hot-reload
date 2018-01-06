require('babel-core/register')
const EXPRESS_PORT = 5000

const bodyParser = require('body-parser')
const fs = require('fs')

const express = require('express')
const http = require('http')
const path = require('path')
const envPath = path.join(__dirname, '../.env.development')
require('dotenv').config({ path: envPath })

const app = express()
const devMiddleware = require('./middleware/development')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../static'))

devMiddleware(app)

app.listen(EXPRESS_PORT, function() {
  console.log(`Listening on: localhost:${EXPRESS_PORT}`)
})
