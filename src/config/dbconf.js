import Nodebatis from 'nodebatis';
import path from 'path';

const Types = Nodebatis.Types;

const nodebatis = new Nodebatis(path.resolve(__dirname, '../yaml'), {
	debug: true,
	dialect: 'mysql',
	host: '127.0.0.1',
	port: 3306,
	database: 'dnspod',
	user: 'root',
	password: 'root',
	pool: {
		minsize: 5,
		maxsize: 20,
		acquireIncrement: 5
	}
});

export default nodebatis