import startSocketServer from './startSocketServer'

const availableInputs = {
  infrared: 'infrared',
  handler: {
    initializer: startSocketServer,
    prefix: 'IR_'
  }
}

function initRuleDeclarations (rule) {
  const protocol = rule.input.protocol
  console.log(protocol)
  if (availableInputs[protocol] === protocol) {
    console.log(`Starting ${protocol} listener`)
    const listener = availableInputs.handler.initializer
    listener(availableInputs.handler.prefix)
  } else {
    console.log(`No valid handler found for protocol '${protocol}'`)
  }
}

export default initRuleDeclarations
