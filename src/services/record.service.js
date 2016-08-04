import nodebatis from '../config/dbconf';

export const create = cond => {
	return new Promise((resolve,reject) => {
		try {
			let {dns, name, type, value, mx, enabel} = cond;
			let update_on = new Date().toLocaleString();
			nodebatis.query('record.insert', {dns, name, type, value, mx, enabel, update_on})
			.then(() => {
				return nodebatis.query('record.findByName', {dns, name})
			}).then(id => {
				resolve({id, name, enabel});
			}).catch(err => {
				reject(err);
			})
		} catch (err) {
			reject(err);
		}
	})
}