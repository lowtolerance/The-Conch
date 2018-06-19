/* eslint-env browser */
import reducer from './predux/reducer'
import createStore from './predux/createStore'

const store = createStore(reducer)

document.addEventListener('click', function (event) {
  switch (event.target.id) {
    case ('power_toggle'):
      store.dispatch({type: 'POWER_TOGGLE'})
      ws.emit('TC', 'POWER_TOGGLE')
      break
    case ('volume_up'):
      store.dispatch({type: 'VOLUME_UP'})
      ws.emit('TC', 'VOLUME_UP')
      break
    case ('volume_down'):
      store.dispatch({type: 'VOLUME_DOWN'})
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

ws.on('TC', function (data) {
  console.log(data)
  store.dispatch({type: data})
})
