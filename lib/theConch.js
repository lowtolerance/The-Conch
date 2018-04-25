'use strict';

var _irPowerToggleToCEC = require('./irPowerToggleToCEC');

var _irPowerToggleToCEC2 = _interopRequireDefault(_irPowerToggleToCEC);

var _initRuleDeclarations = require('./initRuleDeclarations');

var _initRuleDeclarations2 = _interopRequireDefault(_initRuleDeclarations);

var _validateRule = require('./validateRule');

var _validateRule2 = _interopRequireDefault(_validateRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _validateRule2.default)(_irPowerToggleToCEC2.default) ? (0, _initRuleDeclarations2.default)(_irPowerToggleToCEC2.default) : console.log('unable to initialize rule declarations (see errors)');
//# sourceMappingURL=theConch.js.map