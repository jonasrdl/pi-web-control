const express = require('express')
const Gpio = require('onoff').Gpio
const LED = new Gpio(4, 'out')
const app = express()

app.get('/on', function (req, res) {
  LED.writeSync(1)
  res.sendStatus(200)
})

app.get('/off', function (req, res) {
  LED.writeSync(0)
  res.sendStatus(200)
})

app.get('/blink', function (req, res) {})

app.listen(3000)
console.log('Server running on port 3000')
