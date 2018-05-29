export const irPowerToggleToCEC = {
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
