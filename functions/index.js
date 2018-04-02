'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rfapp = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

require('babel-polyfill');

var _firebaseFunctions = require('firebase-functions');

var functions = _interopRequireWildcard(_firebaseFunctions);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _stores = require('./src/stores');

var _stores2 = _interopRequireDefault(_stores);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('view engine', 'ejs');

var index = _fs2.default.readFileSync(_path2.default.join(__dirname, '/public/index.ejs'), 'utf-8');
var profile = _fs2.default.readFileSync(_path2.default.join(__dirname, '/public/profile.ejs'), 'utf-8');

/**
 * TODO: The profile route contains EditProfile component which uses Firebase
 * storage API that's not supporting server side (node js) as of 2/25/2018.
 * So I can't server side render EditProfile component. Instead, I have to
 * staticly render html from server side, and let client side render the actual
 * react components. This breaks the isomorphic characterists of react components
 * between server and client, as I have to maintain server side html and client
 * react components separately. The App.jsx is also different between server
 * and client.
 * Possible solutions:
 * 1. Use Next.js for server side rendering
 * 2. Keep checking updates from Firebase Storage API
 */
app.route('/profile').get(function (req, res) {
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.send(profile);
});

app.route('*').get(function (req, res) {
    var context = {};
    var element = function element() {
        return _react2.default.createElement(
            _reactRedux.Provider,
            { store: (0, _stores2.default)([]) },
            _react2.default.createElement(
                _reactRouterDom.StaticRouter,
                { location: req.url, context: context },
                _react2.default.createElement(_App2.default, null)
            )
        );
    };
    var content = (0, _server.renderToStaticMarkup)(element());
    var html = index.replace('<!-- ::APP:: -->', content);
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.send(html);
});

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// TODO: default export does not work
// eslint-disable-next-line import/prefer-default-export
var rfapp = exports.rfapp = functions.https.onRequest(app);