'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var commandTable = {
  input: function input(command) {
    var commands = {
      A90: function A90() {
        return 'TV_POWER_TOGGLE';
      },
      default: function _default() {
        return 'UNDEFINED';
      }
    };
    return (commands[command] || commands['default'])();
  },
  output: function output(command) {
    var commands = {
      TV_POWER_TOGGLE: function TV_POWER_TOGGLE() {
        return 'echo as 0 | cec-client -s1 -d';
      },
      default: function _default() {
        return 'UNDEFINED';
      }
    };
    return (commands[command] || commands['default'])();
  }
};

exports.default = commandTable;
//# sourceMappingURL=commandTable.js.map