import nodeStatic from 'node-static'
import http from 'http'
// import initializeHandler from './controllers/initializeHandler'

(
  function init () {
    const namespaces = []
    const rules = [
      {
        name: 'irPowerToggleToCEC',
        input: {
          command: 'TV_POWER_TOGGLE',
          protocol: 'infrared'
        },
        output: {
          command: 'TV_POWER_TOGGLE',
          protocol: 'hdmi-cec'
        }
      },
      {
        name: 'interceptPowerToggleFromXbox',
        input: {
          command: 'DEAD_POWER_TOGGLE',
          protocol: 'infrared'
        },
        output: {
          command: '',
          protocol: ''
        }
      }
    ]

    const file = new nodeStatic.Server('public', {
      cache: 0,
      gzip: true
    })

    const httpServer = http.createServer(function (request, response) {
      request.addListener('end', function () {
        file.serve(request, response)
      })
      request.resume()
    }).listen(3010)

    const io = require('socket.io').listen(httpServer)
    io.serveClient(true)

    const map = command => 'TV_POWER_TOGGLE'
    const listener = {
      name: 'IR Event Receiver',
      handles: 'infrared',
      handler: {
        initializer: initSocketNamespaces,
        prefix: 'IR'
      }
    }

    function initSocketNamespaces (namespace) {
      io.on('connect', connected => {
        connected.emit('tc', 'connected')
        const infrared = connected.of('/IR')
        //namespaces[namespace] === undefined
        //  ? namespaces[namespace] = io.of(`http://localhost:3010/${namespace}`)
        //  : console.log(`Namespace ${namespace} already exists, reusing.`)
        //namespaces[namespace].on('connect', client => {
        //  client.emit('tc', 'knows how to talk infrared')
        //  client.on(namespace, function (data) {
        //    const mappedIO = map(data)
        infrared.on('IR', data => {
          infrared.emit('tc', `outputs ${data}`)
          infrared.emit(namespace, data)
        })
      }
    }

    function initializeHandler (rule) {
      if (listener.handles === rule.input.protocol) {
        console.log(`Starting ${listener.name} listener to satisfy rule '${rule.name}'`)
        listener.handler.initializer(listener.handler.prefix)
      } else {
        console.log(`No valid handler found for protocol '${rule.input.protocol}'`)
      }
    }

    rules.map(rule => initializeHandler(rule))
  })()
