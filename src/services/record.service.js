import nodebatis from '../config/dbconf';

export const create = async cond => {
	let conn = null;
	try {
		let {dns, name, type, value, mx, enabel} = cond;
		let update_on = new Date().toLocaleString();
		conn = await nodebatis.beginTransation();
		await conn.execute('record.insert', {dns, name, type, value, mx, enabel, update_on});
		let id = await conn.execute('record.findByName', {dns, name});
		console.log(id);
		nodebatis.commit(conn);
		return {id, name ,enabel};
	} catch (err) {
		console.log(err);
		nodebatis.rollback(conn);
	} finally {
		conn && nodebatis.releaseConn(conn);
	}
}