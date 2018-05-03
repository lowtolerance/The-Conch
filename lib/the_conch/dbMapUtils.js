'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _commandTable = require('../the_ocean/commandTable');

var _commandTable2 = _interopRequireDefault(_commandTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapI2U = function mapI2U(command) {
  return _commandTable2.default.input(command).value;
};

var mapU2O = function mapU2O(command) {
  return _commandTable2.default.output(command).value;
};

var map = function map(command) {
  return mapU2O(mapI2U(command));
};

exports.default = map;
//# sourceMappingURL=dbMapUtils.js.map