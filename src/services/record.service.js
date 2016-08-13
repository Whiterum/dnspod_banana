import nodebatis from '../config/dbconf';

export const create = async cond => {
	let conn = null;
	try {
		let {do_id, name, type, value, mx, enable} = cond;
		let update_on = new Date().toLocaleString();
		conn = await nodebatis.beginTransation();
		await conn.execute('record.insert', {do_id, name, type, value, mx, enable, update_on});
		await conn.execute('domain.addRecord', {do_id})
		let record = await conn.execute('record.findByName', {do_id, name});
		nodebatis.commit(conn);
		record = record[0];
		return {record};
	} catch (err) {
		console.log(err);
		nodebatis.rollback(conn);
	} finally {
		conn && nodebatis.releaseConn(conn);
	}
}

export const remove = async cond => {
	let conn = null;
	try {
		let {do_id, re_id} = cond;
		conn = await nodebatis.beginTransation();
		await conn.execute('record.remove', {re_id});
		await conn.execute('domain.diffRecord', {do_id});
		nodebatis.commit(conn);
	} catch (err) {
		ctx.body = err;
		nodebatis.rollback(conn);
	} finally {
		nodebatis.releaseConn(conn);
	}
}