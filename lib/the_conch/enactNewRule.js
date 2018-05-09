'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _startSocketServer = require('./startSocketServer');

var _startSocketServer2 = _interopRequireDefault(_startSocketServer);

var _firebaseInitializer = require('./firebaseInitializer');

var _firebaseInitializer2 = _interopRequireDefault(_firebaseInitializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var availableInputs = {
  infrared: 'infrared',
  handler: {
    initializer: _startSocketServer2.default,
    prefix: 'IR_'
  }
};

function enactNewRule(rule) {
  var db = _firebaseInitializer2.default.database().ref('rules');
  db.push(rule);

  var protocol = rule.rule.input.protocol;
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