'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _commandTable = require('../the_ocean/commandTable');

var _commandTable2 = _interopRequireDefault(_commandTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startSocketServer(msgPrefix) {
  var io = require('socket.io')();
  io.on('connect', function (client) {
    return client.on(msgPrefix, function (data) {
      var inputMappedToOutput = _commandTable2.default.output(_commandTable2.default.input(data));
      io.emit('IR_', inputMappedToOutput);
    });
  });
  io.listen(3010);
}

exports.default = startSocketServer;
//# sourceMappingURL=startSocketServer.js.map