import nedb from 'nedb'

const irPowerToggleToCEC = {
  name: 'irPowerToggleToCEC',
  input: {
    command: 'TV_POWER_TOGGLE',
    protocol: 'infrared'
  },
  output: {
    command: 'TV_POWER_TOGGLE',
    protocol: 'hdmi-cec'
  }
}

const db = new nedb({filename: 'rules.json', autoload: true})
db.insert(irPowerToggleToCEC)
