'use strict';

require('babel-polyfill');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _logger = require('./common/logger');

var _logger2 = _interopRequireDefault(_logger);

var _envconf = require('./config/envconf');

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import session from 'koa-generic-session';
// import redisStore from 'koa-redis';

var app = new _koa2.default();
var router = new _koaRouter2.default();

// static server
app.use((0, _koaConvert2.default)((0, _koaStatic2.default)('static')));

// body parser
app.use((0, _koaBodyparser2.default)());

// logger
app.use(_logger2.default);

// routes
(0, _routes2.default)(router);
app.use(router.routes());

//catch uncatchEXception
process.on('uncaughtException', function (err) {
  console.log('uncaughtException' + err);
});

app.listen(_envconf.port);