'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function startSocketServer(msgPrefix) {
  var io = require('socket.io')();
  io.on('connection', function (client) {
    return client.on(msgPrefix, function (data) {
      return console.log(data);
    });
  });
  io.listen(3010);
}

exports.default = startSocketServer;
//# sourceMappingURL=startSocketServer.js.map