import uuid from 'uuid/v4'

export default {
  key: uuid(),
  class: 'media',
  type: 'console',
  brand: 'Microsoft',
  model: 'Xbox One S',
  interfaces: {
    inputs: ['IR', 'App', 'BT'],
    outputs: ['BT', 'App', 'CEC']
  }
}
