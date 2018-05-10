import uuid from 'uuid/v4'

export default {
  key: uuid(),
  class: 'media',
  type: 'tv',
  brand: 'Vizio',
  model: 'e420i-b0',
  interfaces: {
    inputs: ['IR', 'App', 'BT', 'CEC'],
    outputs: ['IR', 'BT', 'App', 'CEC']
  }
}
