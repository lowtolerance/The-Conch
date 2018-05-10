import initSocketNamespaces from './initSocketNamespaces'

const availableInputs = {
  infrared: 'infrared',
  handler: {
    initializer: initSocketNamespaces,
    prefix: 'IR_'
  }
}

function initializeHandler (rule) {
  const protocol = rule.input.protocol
  console.log(protocol)
  if (availableInputs[protocol] === protocol) {
    console.log(`Starting ${protocol} listener to satisfy rule '${rule.name}'`)
    const listener = availableInputs.handler.initializer
    listener(availableInputs.handler.prefix)
  } else {
    console.log(`No valid handler found for protocol '${protocol}'`)
  }
}

export default initializeHandler
