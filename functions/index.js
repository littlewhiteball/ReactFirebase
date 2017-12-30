'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rfapp = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

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

var _App = require('./src/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('view engine', 'ejs');

var index = _fs2.default.readFileSync(_path2.default.join(__dirname, '/public/index.ejs'), 'utf-8');
var login = _fs2.default.readFileSync(_path2.default.join(__dirname, '/public/login.ejs'), 'utf-8');
var logout = _fs2.default.readFileSync(_path2.default.join(__dirname, '/public/logout.ejs'), 'utf-8');

app.route('*').get(function (req, res) {
    var context = {};
    var element = function element() {
        return _react2.default.createElement(
            _reactRedux.Provider,
            { store: _stores2.default },
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

// app.route('/')
//     .get((req, res) => {
//         const context = {};
//         const element = () => (
//             <StaticRouter location={req.url} context={context}>
//                 <Routes />
//             </StaticRouter>
//         );
//         const content = renderToString(element());
//         const html = index.replace('<!-- ::APP:: -->', content);
//         res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
//         res.send(html);
//     });

// app.route('/login')
//     .get((req, res) => {
//         const html = login.replace('<!-- ::APP:: -->', renderToString(<h3>TODO: Login server side rendering</h3>));
//         res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
//         res.send(html);
//     });

// app.route('/logout')
//     .get((req, res) => {
//         const html = logout.replace('<!-- ::APP:: -->', renderToString(<h3>TODO: Logout server side rendering</h3>));
//         res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
//         res.send(html);
//     });

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

var rfapp = exports.rfapp = functions.https.onRequest(app);

// const rfapp = functions.https.onRequest(app);

// export default rfapp;