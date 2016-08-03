import nodebatis from '../config/dbconf';

export const insert = name => {
	return new Promise((resolve, reject) => {
		try {
			let time = new Date().toLocaleString();
			let [create_on, update_on] = [time, time];
			let result = nodebatis.query('domain.insert', {name, create_on, update_on});
			result.then(() => {
				resolve();
			}, err => {
				reject(err);
			});
		} catch(err) {
			reject(err);
		}
	})
}
export const findByName = name => {
	return new Promise((resolve, reject) => {
		let result = nodebatis.query('domain.findByName', {name});
		result.then(domain => {
			domain = domain[0];
			resolve({domain});
		}, err => {
			reject(err);
		});
	})
}

export const remove = id => {
	return new Promise((resolve, reject) => {
		let result = nodebatis.query('domain.remove', {id});
		result.then(() => {
			resolve();
		}, err => {
			reject(err);
		});
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
				result = findAll();
			}
			result.then(domains => {
				resolve(domains);
			}, err => {
				reject(err);
			});
		} catch (err) {
			reject(err);
		}
	})
}

export const findAll = () => {
	return new Promise((resolve, reject) => {
		let result = nodebatis.query('domain.findAll');
		result.then((value) => {
			resolve(value);
		}, err => {
			reject(err);
		});
	})
}

export const count = () => {
	return new Promise((resolve, reject) => {
		let result = nodebatis.query('domain.count');
		result.then(value => {
			value = value[0];
			resolve(value);
		}, err => {
			reject(err);
		})
	})
}