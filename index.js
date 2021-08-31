const lampOn = document.querySelector('button.lampOn')
const lampOff = document.querySelector('button.lampOff')
const lampBlink = document.querySelector('button.lampBlink')

const IP = '192.168.0.152'
const PORT = 3000

lampOn.addEventListener('click', () => {
  getReq(`http://${IP}:${PORT}/on`)
})

lampOff.addEventListener('click', () => {
  getReq(`http://${IP}:${PORT}/off`)
})

lampBlink.addEventListener('click', () => {
  getReq(`http://${IP}:${PORT}/blink`)
})

const getReq = (url) => {
  let xmlHttp = new XMLHttpRequest()

  xmlHttp.open('GET', url, false)
  xmlHttp.send(null)

  return xmlHttp.responseText
}
