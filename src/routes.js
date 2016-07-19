import * as UserCtrl from './controllers/user.ctrl';
// import * as DnsCtrl  from './controllers/dns.ctrl';
// import * as RecoredCtrl from './controllers/record.ctrl';

export default function(router) {
	router.get('/User.Detail', UserCtrl.userDetail);
}