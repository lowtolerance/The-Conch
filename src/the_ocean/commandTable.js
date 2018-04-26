const commandTable = {
  input: function (command) {
    const commands = {
      A90: function () {
        return 'TV_POWER_TOGGLE'
      },
      default: function () {
        return 'UNDEFINED'
      }
    }
    return (commands[command] || commands['default'])()
  },
  output: function (command) {
    const commands = {
      TV_POWER_TOGGLE: function () {
        return 'echo as 0 | cec-client -s1 -d'
      },
      default: function () {
        return 'UNDEFINED'
      }
    }
    return (commands[command] || commands['default'])()
  }
}

export default commandTable
