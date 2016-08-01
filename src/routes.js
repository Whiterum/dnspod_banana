import * as DomainCtrl from './controllers/domain.ctrl';
import * as RecordCtrl from './controllers/record.ctrl';

export default function(router) {
	router.post('/Domain.Create', DomainCtrl.create);
	router.post('/Domain.List', DomainCtrl.getList);
	router.post('/Domain.Remove', DomainCtrl.remove);

	router.post('/Record.Create', RecordCtrl.create);
	router.post('/Record.List', RecordCtrl.getList);
	router.post('/Record.Modify', RecordCtrl.modify);
	router.post('/Record.Remove', RecordCtrl.remove);
	router.post('/Record.Search', RecordCtrl.search);
}