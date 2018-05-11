/* This is just a sort of functional placeholder. Ultimately, all
available commands will be stored in a cloud-based database. When
a device is added, we query the database for all of the relevant
information, which then gets added to our local storage. */

const commandTable = {
  input: function (command) {
    const commands = {
      'A90': function () {
        return {
          value: 'TV_POWER_TOGGLE'
        }
      },
      '490': function () {
        return {
          value: 'TV_VOLUME_UP'
        }
      },
      'C90': function () {
        return {
          value: 'TV_VOLUME_DOWN'
        }
      },
      'D10': function () {
        return {
          value: 'TV_ENTER'
        }
      },
      default: function () {
        return {
          value: 'UNDEFINED'
        }
      }
    }
    return (commands[command] || commands['default'])()
  },
  output: function (command) {
    const commands = {
      'TV_POWER_TOGGLE': function () {
        return {
          value: 'echo as 0 | cec-client -s1 -d'
        }
      },
      'TV_VOLUME_UP': function () {
        return {
          value: '45ac3a'
        }
      },
      'TV_VOLUME_DOWN': function () {
        return {
          value: '45ab6e'
        }
      },
      'TV_ENTER': function () {
        return {
          value: '7e54ea'
        }
      },
      default: function () {
        return {
          value: 'UNDEFINED'
        }
      }
    }
    return (commands[command] || commands['default'])()
  }
}

export default commandTable
