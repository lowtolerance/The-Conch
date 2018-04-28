'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { newMessage: 'Hello, world!' };
    function handlePowerClick() {
      socket.emit('IR_', 'A90');
    }

    function handleVolumeUpClick() {
      socket.emit('IR_', '890');
    }

    function handleVolumeDownClick() {
      socket.emit('IR_', 'B90');
    }

    function clearMessage() {
      var msg = document.getElementById('msg');
      msg.textContent = 'The Conch awaits';
      clearInterval(newMessage);
    }

    function updateMessage(data) {
      newMessage = setInterval(clearMessage, 5000);
      msg.textContent = data;
    }
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(
          'p',
          { id: 'msg' },
          'The Conch awaits'
        ),
        _react2.default.createElement(
          'button',
          { name: 'TV_POWER_TOGGLE', onClick: handlePowerClick() },
          'Power'
        ),
        _react2.default.createElement(
          'button',
          { name: 'TV_VOLUME_UP', onClick: handleVolumeUpClick() },
          'Volume Up'
        ),
        _react2.default.createElement(
          'button',
          { name: 'TV_VOLUME_DOWN', onClick: handleVolumeDownClick() },
          'Volume Down'
        ),
        _react2.default.createElement('ul', { id: 'output' })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=App.js.map