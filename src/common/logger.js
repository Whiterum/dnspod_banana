import log4js from 'log4js';

log4js.configure('configure.json', {
    cwd: "/home/bezos/services/dnspod_banana"
})
const access = log4js.getLogger('access');
access.setLevel("TRACE");

export default async (ctx, next) => {
    try {
        let logInfo = [];
        let startTime = new Date().getTime();
        logInfo.push(ctx.host);
        logInfo.push(ctx.url);
        logInfo.push(ctx.method);
        if (ctx.method === 'GET') {
            logInfo.push(JSON.stringify(ctx.query));
        } else {
            logInfo.push(JSON.stringify(ctx.request.body));
        }
        await next();
        logInfo.push(ctx.status);
        logInfo.push((new Date().getTime() - startTime) + 'ms');
        access.info(logInfo.join(' - '));
    } catch (err) {
        console.log(err);
    }
}