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

app.get('/blink', function (req, res) {
  const blinkInterval = setInterval(blink, 250)

  function blink() {
    if (LED.readSync() === 0) {
      LED.writeSync(1)
    } else {
      LED.writeSync(0)
    }
  }

  function endBlink() {
    clearInterval(blinkInterval)
    LED.writeSync(0)
    LED.unexport()
  }

  setTimeout(endBlink, 5000)
})

app.listen(3000)
console.log('=> Server running on port 3000')
