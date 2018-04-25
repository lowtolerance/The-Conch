'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function initRuleDeclarations(rule) {
  console.log(rule);
}

function startSocketServer(msg_prefix) {
  var io = require('socket.io')();
  io.on('connection', function (client) {
    client.on(msg_prefix, function (data) {
      console.log(data);
    });
  });
  io.listen(3010);
}

exports.default = initRuleDeclarations;
//# sourceMappingURL=ruleRunner.js.map