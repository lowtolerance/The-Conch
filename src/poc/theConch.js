const enqueue = require('./utils/enqueue')
const dequeue = require('./utils/dequeue')
const lookup = require('./lookup')
// const CEC = require('@damoclark/cec-monitor').CEC
const CECMonitor = require('@senzil/cec-monitor').CECMonitor

// Iterate through our event queue until no events
// remain. Susceptible to being replaced by a
// different strategy if the need arises.
const config = {
  maxVolume: 12
}

let monitor = new CECMonitor('The Conch',
  {
    debug: false,
    hdmiport: 1,
    processManaged: false,
    recorder: true,
    autorestart: true
  }
)

const getVolumeStatus = () => 0
const getPowerStatus = () => false
const getConfig = () => config
const getInitialState = () => (
  {
    volume: getVolumeStatus(),
    power: getPowerStatus(),
    config: getConfig(),
    ready: false
  }
)
const reducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case 'READY':
      return {...state, ready: true}
    case 'POWER_TOGGLE':
      return {...state, power: !state.power}
    case 'VOLUME_UP':
      if (state.volume < state.config.maxVolume) {
        return {...state, volume: state.volume + 1}
      } else return state
    case 'VOLUME_DOWN':
      if (state.volume > 0) {
        return {...state, volume: state.volume - 1}
      } else return state
    default:
      return state
  }
}
const createStore = (reducer) => {
  let store = {}
  store.state = getInitialState()
  store.listeners = []
  store.getState = () => store.state
  store.subscribe = (handler) => store.listeners.push(handler)
  store.dispatch = (action) => {
    store.state = reducer(store.state, action)
    store.listeners.forEach(listener => listener(store))
  }
  store.dispatch({})
  return store
}

const serverStore = createStore(reducer)
serverStore.subscribe((store) => {
  console.log(store.getState())
  global.socket.emit('restate', store.getState())
})
serverStore.subscribe((store) => {
  monitor.on(CECMonitor.EVENTS.REPORT_POWER_STATUS,
    function (packet) {
      console.log(packet.data.str)
      switch (packet.data.str) {
        case 'STANDBY':
          if (store.getState().power) store.dispatch({type: 'POWER_TOGGLE'})
          break
        case 'ON':
          if (!store.getState().power) store.dispatch({type: 'POWER_TOGGLE'})
          break
        case 'IN_TRANSITION_STANDBY_TO_ON':
          if (!store.getState().power) store.dispatch({type: 'POWER_TOGGLE'})
      }
    }
  )
})
function runout () {
  while (this.eventQueue.length !== 0) {
    const event = dequeue() // Get event
    lookup(event, serverStore) // Act accordingly
  }
  console.timeEnd() // end timer. prints time from start to finish upon receiving an event.
}

// Takes socket.io socket as input,
// which it probably shouldn't.
// socket logic in general is likely
// a mess and is certain to change
// drastically
function theConch (openSocket) {
  global.eventQueue = [] // Init queue
  openSocket.on('connect', connected => {
    global.socket = connected
    serverStore.dispatch({type: 'READY'})
    connected.on('TC', data => {
      console.time() // Start timer
      console.log(`Caught signal '${data}'`)
      enqueue(data) // Add socket message payload to event queue
      runout() // Run out our queue.
    })
  })
}

module.exports = theConch
