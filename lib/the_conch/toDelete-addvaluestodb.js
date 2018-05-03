'use strict';

var _firebaseInitializer = require('./firebaseInitializer');

var _firebaseInitializer2 = _interopRequireDefault(_firebaseInitializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = {
  command: 'B90',
  name: 'Volume Up'
};

_firebaseInitializer2.default.database().ref('actions').push(actions);
//# sourceMappingURL=toDelete-addvaluestodb.js.map