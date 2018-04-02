'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PrivateRoute = require('./src/components/utilities/PrivateRoute');

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _Home = require('./src/components/pages/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Auth = require('./src/components/pages/Auth');

var _Auth2 = _interopRequireDefault(_Auth);

var _NewCompetition = require('./src/components/pages/NewCompetition');

var _NewCompetition2 = _interopRequireDefault(_NewCompetition);

var _JoinCompetition = require('./src/components/pages/JoinCompetition');

var _JoinCompetition2 = _interopRequireDefault(_JoinCompetition);

var _Header = require('./src/components/main/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./src/components/main/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _NotFound = require('./src/components/main/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This APP is same as the APP jsx on client side,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * except it does not have /profile route, as the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * EdgeProfile component of /profile route uses
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Firebase Storage API that only supports consumption
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in browser. More details checkout ./index.jsx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// eslint-disable-next-line react/prefer-stateless-function
var AppComponent = exports.AppComponent = function (_Component) {
    _inherits(AppComponent, _Component);

    function AppComponent() {
        _classCallCheck(this, AppComponent);

        return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
    }

    _createClass(AppComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, { location: this.props.location }),
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Home2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/auth', exact: true, component: _Auth2.default }),
                    _react2.default.createElement(_PrivateRoute2.default, { path: '/competition', exact: true, component: _NewCompetition2.default }),
                    _react2.default.createElement(_PrivateRoute2.default, { path: '/competition/join', exact: true, component: _JoinCompetition2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _NotFound2.default })
                ),
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return AppComponent;
}(_react.Component);

AppComponent.propTypes = {
    location: _propTypes2.default.shape({
        hash: _propTypes2.default.string,
        pathname: _propTypes2.default.string,
        search: _propTypes2.default.string,
        state: _propTypes2.default.object
    }).isRequired
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        location: state.routing.location
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(AppComponent);