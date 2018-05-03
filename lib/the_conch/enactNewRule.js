'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _startSocketServer = require('./startSocketServer');

var _startSocketServer2 = _interopRequireDefault(_startSocketServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var availableInputs = {
  infrared: 'infrared',
  handler: {
    initializer: _startSocketServer2.default,
    prefix: 'IR_'
  }
};

function enactNewRule(rule) {
  var protocol = rule.input.protocol;
  console.log(protocol);
  if (availableInputs[protocol] === protocol) {
    console.log('Starting ' + protocol + ' listener');
    var listener = availableInputs.handler.initializer;
    listener(availableInputs.handler.prefix);
  } else {
    console.log('No valid handler found for protocol \'' + protocol + '\'');
  }
}

exports.default = enactNewRule;
//# sourceMappingURL=enactNewRule.js.map