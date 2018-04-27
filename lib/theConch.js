'use strict';

var _irPowerToggleToCEC = require('./the_conch/irPowerToggleToCEC');

var _irPowerToggleToCEC2 = _interopRequireDefault(_irPowerToggleToCEC);

var _enactNewRule = require('./the_conch/enactNewRule');

var _enactNewRule2 = _interopRequireDefault(_enactNewRule);

var _ruleValidates = require('./the_conch/ruleValidates');

var _ruleValidates2 = _interopRequireDefault(_ruleValidates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if ((0, _ruleValidates2.default)(_irPowerToggleToCEC2.default)) {
  (0, _enactNewRule2.default)(_irPowerToggleToCEC2.default);
} else {
  console.log('unable to initialize rule declarations (see errors)');
}
//# sourceMappingURL=theConch.js.map