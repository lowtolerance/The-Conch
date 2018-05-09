'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ruleValidates;

var _validProperties = require('../the_ocean/validProperties');

var _validProperties2 = _interopRequireDefault(_validProperties);

var _firebaseInitializer = require('./firebaseInitializer');

var _firebaseInitializer2 = _interopRequireDefault(_firebaseInitializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ioPropertiesAreValid(rule) {
  var result = {
    valid: true,
    errors: []
  };

  for (var pathway in _validProperties2.default) {
    if (rule.rule[pathway] === undefined) {
      result.valid = false;
      result.errors.push('Rule does not contain an ' + pathway + ' definition');
    }
    for (var property in rule.rule[pathway]) {
      if (!_validProperties2.default[pathway].hasOwnProperty(property)) {
        result.valid = false;
        result.errors.push(pathway.charAt(0).toUpperCase() + pathway.slice(1) + ' property \'' + property + '\' is not valid');
      }
    }
  }
  return result;
}

function ruleValidates(rule) {
  var result = ioPropertiesAreValid(rule);
  if (!result.valid) {
    result.errors.map(function (error) {
      return console.log('ERROR: ' + error);
    });
    return false;
  } else {
    var db = _firebaseInitializer2.default.database().ref('rulebook');
    db.push(rule);
    return true;
  }
}
//# sourceMappingURL=ruleValidates.js.map