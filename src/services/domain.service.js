import nodebatis from '../config/dbconf';

export const create = async name => {
	let conn = null;
	try {
		let time = new Date().toLocaleString();
		let [create_on, update_on] = [time, time];
		conn = await nodebatis.beginTransation();
		await conn.execute('domain.insert', {name, create_on, update_on});
		let domain = await conn.execute('domain.findByName', {name});
		nodebatis.commit(conn);
		domain = domain[0];
		return {domain};
	} catch (err) {
		console.log(err);
		nodebatis.rollback(conn);
	} finally {
		conn && nodebatis.releaseConn(conn);
	}
}

export const getList = async cond => {
	let conn = null,
		domains;
	try {
		conn = await nodebatis.beginTransation();
		if ('offset' in cond && 'length' in cond) {
			let {offset, length} = cond;
			domains = await conn.execute('domain.getList', {offset, length});
		} else {
			domains = await conn.execute('domain.findAll');
		}
		let info = await conn.execute('domain.count');
		info = info[0];
		nodebatis.commit(conn);
		return [domains, info];
	} catch (err) {
		console.log(err);
		nodebatis.rollback(conn);
	} finally {
		conn && nodebatis.releaseConn(conn);
	}
}
