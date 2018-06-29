const enqueue = require('./utils/enqueue')
const dequeue = require('./utils/dequeue')
const lookup = require('./lookup')
// const CECMonitor = require('@senzil/cec-monitor').CECMonitor
const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function poweron () {
  const { stdout, stderr } = await exec(
    'echo on 0 | cec-client RPI -s -d 1'
  )
  if (stderr) {
    console.log(stderr)
  }
  console.log(stdout)
}

async function poweroff () {
  const { stdout, stderr } = await exec(
    'echo standby 0 | cec-client RPI -s -d 1'
  )
  if (stderr) {
    console.log(stderr)
  }
  console.log(stdout)
}

async function powertoggle () {
  const power = await getPowerStatus()
  if (power) {
    poweroff()
  } else poweron()
}
async function getPowerStatus () {
  const { stdout, stderr } = await exec(
    'echo pow 0 | cec-client RPI -s -d 1'
  )
  if (stderr) {
    console.log(stderr)
  }
  if (stdout.includes('standby')) {
    return false
  } else if (stdout.includes('on')) {
    return true
  }
  console.log(stdout)
}

// Iterate through our event queue until no events
// remain. Susceptible to being replaced by a
// different strategy if the need arises.
const config = {
  maxVolume: 12
}

/* let monitor = new CECMonitor('The Conch',
  {
    debug: false,
    hdmiport: 1,
    processManaged: false,
    recorder: true,
    autorestart: true
  }
) */

const getVolumeStatus = () => 0
// const getPowerStatus = () => false
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
  if (store.getState().power !== getPowerStatus()) powertoggle()
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
// a mess and is almost certain to change
// drastically.
function theConch (openSocket) {
  /* monitor.on(CECMonitor.EVENTS.REPORT_POWER_STATUS,
    function (packet) {
      console.log(packet.data.str)
      switch (packet.data.str) {
        case 'STANDBY':
          if (serverStore.getState().power) serverStore.dispatch({type: 'POWER_TOGGLE'})
          break
        case 'ON':
          if (!serverStore.getState().power) serverStore.dispatch({type: 'POWER_TOGGLE'})
          break
        case 'IN_TRANSITION_STANDBY_TO_ON':
          if (!serverStore.getState().power) serverStore.dispatch({type: 'POWER_TOGGLE'})
      }
    }
  ) */
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
