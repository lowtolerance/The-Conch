export default [
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
