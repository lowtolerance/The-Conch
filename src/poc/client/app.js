/* eslint-env browser */
import reducer from './predux/reducer'
import createStore from './predux/createStore'

const clientStore = createStore(reducer)

document.addEventListener('click', function (event) {
  switch (event.target.id) {
    case ('power_toggle'):
      ws.emit('TC', 'POWER_TOGGLE')
      break
    case ('volume_up'):
      ws.emit('TC', 'VOLUME_UP')
      break
    case ('volume_down'):
      ws.emit('TC', 'VOLUME_DOWN')
      break
  }
})

const ws = io()
ws.on('connect', function () {
  console.log('connected')
})

ws.on('disconnect', function () {
  console.log('disconnected')
})

ws.on('restate', function (data) {
  console.log('restating application state')
  clientStore.restate(data)
})
