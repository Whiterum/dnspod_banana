import 'babel-polyfill';
import Koa from 'koa';
import mysql from 'mysql';
import server from 'koa-static';
import Router from 'koa-router';
import logger from 'koa-logger';
import session from 'koa-generic-session';
import convert from 'koa-convert';
import bodyParser from 'koa-bodyparser';
import redisStore from 'koa-redis';

const app = new Koa();

app.use(logger());

app.use(convert(server('static')));

app.use(bodyParser());

app.use(ctx => {
	ctx.response.status = 200;
	ctx.body = 'hello world';
})

//catch uncatchEXception
process.on('uncaughtException', function(err){
  console.log('uncaughtException' + err);
});

app.listen(8088);