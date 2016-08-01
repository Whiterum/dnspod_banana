import 'babel-polyfill';
import Koa from 'koa';
import server from 'koa-static';
import Router from 'koa-router';
import logger from './common/logger';
import convert from 'koa-convert';
import dnsRoutes from './routes';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

// static server
app.use(convert(server('static')));

// body parser
app.use(bodyParser());

// logger
app.use(logger);

// routes
dnsRoutes(router);
app.use(router.routes());

//catch uncatchEXception
process.on('uncaughtException', function(err){
  console.log('uncaughtException' + err);
});

app.listen(8088);