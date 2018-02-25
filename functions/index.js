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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('view engine', 'ejs');

var index = _fs2.default.readFileSync(_path2.default.join(__dirname, '/public/index.ejs'), 'utf-8');
var profile = _fs2.default.readFileSync(_path2.default.join(__dirname, '/public/profile.ejs'), 'utf-8');

app.route('/').get(function (req, res) {
    // const context = {};
    // const element = () => (
    //     <Provider store={store([])}>
    //         <StaticRouter location={req.url} context={context}>
    //             <App />
    //         </StaticRouter>
    //     </Provider>
    // );
    // const content = renderToStaticMarkup(element());
    // const html = index.replace('<!-- ::APP:: -->', content);
    // res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    // res.send(html);
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.send(index);
});

app.route('/profile').get(function (req, res) {
    var element = function element() {
        return _react2.default.createElement(
            'h1',
            null,
            'Temp profile'
        );
    };
    var content = (0, _server.renderToStaticMarkup)(element());
    var html = profile.replace('<!-- ::APP:: -->', content);
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.send(html);
});

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// TODO: default export does not work
// eslint-disable-next-line import/prefer-default-export
var rfapp = exports.rfapp = functions.https.onRequest(app);