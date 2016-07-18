import log4js from 'log4js';

log4js.configure('configure.json', {
	cwd: "/home/bezos/services/dnspod_banana"
})

export const access = log4js.getLogger('access');
access.setLevel("INFO");
export const error  = log4js.getLogger('error');
error.setLevel('ERROR');