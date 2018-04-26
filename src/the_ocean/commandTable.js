/* This is just a sort of functional placeholder. Ultimately, all
available commands will be stored in a cloud-based database. When
a device is added, we query the database for all of the relevant
information, which then gets added to our local storage. */

const commandTable = {
  input: function (command) {
    const commands = {
      'A90': function () {
        return {
          commandString: 'TV_POWER_TOGGLE'
        }
      },
      '890': function () {
        return {
          commandString: 'TV_VOLUME_UP'
        }
      },
      'B90': function () {
        return {
          commandString: 'TV_VOLUME_DOWN'
        }
      },
      default: function () {
        return {
          commandString: 'UNDEFINED'
        }
      }
    }
    return (commands[command] || commands['default'])()
  },
  output: function (command) {
    const commands = {
      'TV_POWER_TOGGLE': function () {
        return {
          commandString: 'echo as 0 | cec-client -s1 -d'
        }
      },
      'TV_VOLUME_UP': function () {
        return {
          commandString: '45ac3a'
        }
      },
      'TV_VOLUME_DOWN': function () {
        return {
          commandString: '45ab6e'
        }
      },
      default: function () {
        return {
          commandString: 'UNDEFINED'
        }
      }
    }
    return (commands[command] || commands['default'])()
  }
}

export default commandTable
