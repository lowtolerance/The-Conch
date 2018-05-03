'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  return _react2.default.createElement(
    'button',
    {
      type: 'button',
      key: props.action.id,
      className: 'btn btn-outline-primary',
      name: props.action.command,
      onClick: function onClick(e) {
        props.handler(props.action.command, e);
      } },
    props.action.name
  );
};

var Buttons = function Buttons(props) {
  return props.actions.map(function (action) {
    return _react2.default.createElement(Button, {
      key: action.id,
      action: action.name,
      handler: props.handler });
  });
};

exports.default = Buttons;
//# sourceMappingURL=Buttons.js.map