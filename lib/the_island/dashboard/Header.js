'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(props) {
  return _react2.default.createElement(
    'small',
    null,
    props.message
  );
};

var Header = function Header(props) {
  return _react2.default.createElement(
    'div',
    { className: 'jumbotron' },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'span',
        { className: 'row' },
        _react2.default.createElement(
          'h1',
          { className: 'display-4' },
          'The Conch ',
          _react2.default.createElement(
            Message,
            { message: props.message },
            'awakes'
          )
        )
      )
    )
  );
};

exports.default = Header;
//# sourceMappingURL=Header.js.map