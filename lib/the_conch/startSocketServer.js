'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dbMapUtils = require('../the_conch/dbMapUtils');

var _dbMapUtils2 = _interopRequireDefault(_dbMapUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startSocketServer(msgPrefix) {
  var io = require('socket.io')();
  io.on('connect', function (client) {
    return client.on(msgPrefix, function (data) {
      var mappedIO = (0, _dbMapUtils2.default)(data);
      io.emit('tcMessage', 'outputs \'' + mappedIO + '\'');
      io.emit('IR_', mappedIO);
    });
  });
  io.listen(3010);
}

exports.default = startSocketServer;
//# sourceMappingURL=startSocketServer.js.map