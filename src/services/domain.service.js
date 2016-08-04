import nodebatis from '../config/dbconf';

export const create = name => {
	return new Promise((resolve, reject) => {
		try {
			let time = new Date().toLocaleString();
			let [create_on, update_on] = [time, time];
			nodebatis.query('domain.insert', {name, create_on, update_on})
			.then(() => {
				return nodebatis.query('domain.findByName', {name});
			}).then(domain => {
				domain = domain[0];
				resolve({domain});
			}).catch((err) => {
				reject(err);
			});
		} catch (err) {
			reject(err);
		}
	})
}

export const getList = cond => {
	return new Promise((resolve, reject) => {
		try {
			let result;
			if ('offset' in cond && 'length' in cond) {
				let {offset, length} = cond;
				result = nodebatis.query('domain.getList', {offset, length});
			} else {
				result = nodebatis.query('domain.findAll');
			}
			result.then(domains => {
				resolve(domains);
			}).catch(err => {
				reject(err);
			});
		} catch (err) {
			reject(err);
		}
	})
}

export const count = () => {
	return new Promise((resolve, reject) => {
		let result = nodebatis.query('domain.count');
		result.then(value => {
			value = value[0];
			resolve(value);
		}).catch(err => {
			reject(err);
		});
	})
}