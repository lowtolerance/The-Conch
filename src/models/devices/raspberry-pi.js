import uuid from 'uuid/v4'

export default {
  key: uuid(),
  class: 'media',
  type: 'pi',
  brand: 'Raspberry Pi',
  model: '3B',
  interfaces: {
    inputs: ['App', 'BT', 'NET', 'CEC'],
    outputs: ['App', 'BT', 'NET', 'CEC']
  }
}
