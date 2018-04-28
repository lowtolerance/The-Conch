'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { msg: 'The Conch awaits', newMessage: 'The Conch awaits', command: '' };
    _this.handlePowerClick = _this.handlePowerClick.bind(_this);
    _this.handleVolumeDownClick = _this.handleVolumeDownClick.bind(_this);
    _this.handleVolumeUpClick = _this.handleVolumeUpClick.bind(_this);
    _this.clearMessage = _this.clearMessage.bind(_this);
    _this.updateMessage = _this.updateMessage.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handlePowerClick',
    value: function handlePowerClick() {
      _socket2.default.emit('IR_', 'A90');
    }
  }, {
    key: 'handleVolumeUpClick',
    value: function handleVolumeUpClick() {
      _socket2.default.emit('IR_', '890');
    }
  }, {
    key: 'handleVolumeDownClick',
    value: function handleVolumeDownClick() {
      _socket2.default.emit('IR_', 'B90');
    }
  }, {
    key: 'clearMessage',
    value: function clearMessage() {
      this.setState({ msg: 'The Conch awaits' });
      clearInterval(this.state.newMessage);
    }
  }, {
    key: 'updateMessage',
    value: function updateMessage(data) {
      this.setState.newMessage = setInterval(this.clearMessage, 5000);
      this.setState({ msg: data });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _socket2.default.connect('http://localist:3010');
      _socket2.default.on('connect', function () {
        _socket2.default.on('IR_', function (data) {
          this.setState({ command: data });
        });
        _socket2.default.on('tcMessage', function (data) {
          this.setState({ newMessage: data });
        });
      });
    }
  }, {
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
          { name: 'TV_POWER_TOGGLE', onClick: this.handlePowerClick },
          'Power'
        ),
        _react2.default.createElement(
          'button',
          { name: 'TV_VOLUME_UP', onClick: this.handleVolumeUpClick },
          'Volume Up'
        ),
        _react2.default.createElement(
          'button',
          { name: 'TV_VOLUME_DOWN', onClick: this.handleVolumeDownClick },
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