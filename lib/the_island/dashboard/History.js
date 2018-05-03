'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var History = function History(props) {
  return _react2.default.createElement(
    'table',
    { className: 'history table table-sm' },
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'Command'
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      props.history.map(function (command) {
        return _react2.default.createElement(
          'tr',
          { key: command },
          _react2.default.createElement(
            'td',
            null,
            command
          )
        );
      })
    )
  );
};

exports.default = History;
//# sourceMappingURL=History.js.map