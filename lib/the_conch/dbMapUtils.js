'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebaseInitializer = require('./firebaseInitializer');

var _firebaseInitializer2 = _interopRequireDefault(_firebaseInitializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = _firebaseInitializer2.default.database().ref('commands');

var mapI2U = function mapI2U(command) {
  var input;
  db.orderByChild('name').equalTo(command).once('child_added', function (data) {
    input = data.val().value;
  }).then(function (command) {
    return new Promise(function (resolve, reject) {
      if (command) {
        resolve(command);
      }
    });
  });
  return input;
};

// const map = command => mapU2O(mapI2U(command))

var map = function map(command) {
  console.log('from map function: ' + mapI2U(command));
  return mapI2U(command);
};

exports.default = map;
//# sourceMappingURL=dbMapUtils.js.map