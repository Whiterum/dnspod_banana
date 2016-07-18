'use strict';

require('babel-polyfill');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _koaGenericSession = require('koa-generic-session');

var _koaGenericSession2 = _interopRequireDefault(_koaGenericSession);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaRedis = require('koa-redis');

var _koaRedis2 = _interopRequireDefault(_koaRedis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();

app.use((0, _koaLogger2.default)());

app.use(function (ctx) {
	ctx.response.status = 200;
	ctx.body = 'hello world';
});

//catch uncatchEXception
process.on('uncaughtException', function (err) {
	console.log('uncaughtException' + err);
});

app.listen(8088);