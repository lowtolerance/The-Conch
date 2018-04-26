'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateRule;
function validateIOProperties(rule) {
  var result = {
    valid: true,
    errors: []
  };

  var validProperties = {
    input: {
      command: 'command',
      protocol: 'protocol'
    },
    output: {
      command: 'command',
      protocol: 'protocol'
    }
  };

  for (var pathway in validProperties) {
    if (rule[pathway] === undefined) {
      result.valid = false;
      result.errors.push('Rule does not contain an ' + pathway + ' definition');
    }
    for (var property in rule[pathway]) {
      if (!validProperties.input.hasOwnProperty(property)) {
        result.valid = false;
        result.errors.push('Input property \'' + property + '\' is not valid');
      }
    }
  }
  return result;
}

function validateRule(rule) {
  var result = validateIOProperties(rule);
  if (!result.valid) {
    result.errors.map(function (error) {
      return console.log('ERROR: ' + error);
    });
    return false;
  } else {
    console.log('Rule passes validation!');
  }
  return true;
}
//# sourceMappingURL=validateRule.js.map