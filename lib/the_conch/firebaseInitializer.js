'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  apiKey: 'AIzaSyBy6Oviebc33IQXiOKxjx6VRgEMpjhboMM',
  authDomain: 'the-conch-a1.firebaseapp.com',
  databaseURL: 'https://the-conch-a1.firebaseio.com',
  projectId: 'the-conch-a1',
  storageBucket: 'the-conch-a1.appspot.com',
  messagingSenderId: '1017061972440'
};

var fire = _firebase2.default.initializeApp(config);
exports.default = fire;
//# sourceMappingURL=firebaseInitializer.js.map