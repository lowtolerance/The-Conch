'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* This is just a sort of functional placeholder. Ultimately, all
available commands will be stored in a cloud-based database. When
a device is added, we query the database for all of the relevant
information, which then gets added to our local storage. */

var commandTable = {
  input: function input(command) {
    var commands = {
      'A90': function A90() {
        return {
          commandString: 'TV_POWER_TOGGLE'
        };
      },
      '890': function _() {
        return {
          commandString: 'TV_VOLUME_UP'
        };
      },
      'B90': function B90() {
        return {
          commandString: 'TV_VOLUME_DOWN'
        };
      },
      default: function _default() {
        return {
          commandString: 'UNDEFINED'
        };
      }
    };
    return (commands[command] || commands['default'])();
  },
  output: function output(command) {
    var commands = {
      'TV_POWER_TOGGLE': function TV_POWER_TOGGLE() {
        return {
          commandString: 'echo as 0 | cec-client -s1 -d'
        };
      },
      'TV_VOLUME_UP': function TV_VOLUME_UP() {
        return {
          commandString: '45ac3a'
        };
      },
      'TV_VOLUME_DOWN': function TV_VOLUME_DOWN() {
        return {
          commandString: '45ab6e'
        };
      },
      default: function _default() {
        return {
          commandString: 'UNDEFINED'
        };
      }
    };
    return (commands[command] || commands['default'])();
  }
};

exports.default = commandTable;
//# sourceMappingURL=commandTable.js.map