import nodebatis from '../config/dbconf';

// const create = (name) => {
// 	return new Promise((resolve, reject) => {
// 		try {
// 			let time = new Date().toLocaleString();
// 			let [create_on, update_on] = [time, time];
// 			nodebatis.query('domain.insert', {name, create_on, update_on});
// 			let domain = nodebatis.query('domain.findByName', {name});
// 			resolve(domain);
// 		} catch (err){
// 			reject(err);
// 		}
// 	});
// };

// const remove = (id) => {
// 	return new Promise((resolve, reject) => {
// 		try {
// 			let result = nodebatis.query('domain.delete', {id});
// 			resolve(result);
// 		} catch (err) {
// 			reject (err);
// 		}
// 	})
// }

// const getList = (offset, length) => {
// 	return new Promise((resolve, reject) => {
// 		try {
// 			let result = nodebatis.query('domain.getList', {offset, length});
// 			resolve(result);
// 		} catch (err) {
// 			reject(err);
// 		}
// 	})
// }

const insert = name => {
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
const findByName = name => {
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

const remove = id => {
	return new Promise((resolve, reject) => {
		let result = nodebatis.query('domain.remove', {id});
		result.then(() => {
			resolve();
		}, err => {
			reject(err);
		});
	})
}

const getList = cond => {
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

const findAll = () => {
	return new Promise((resolve, reject) => {
		let result = nodebatis.query('domain.findAll');
		result.then((value) => {
			resolve(value);
		}, err => {
			reject(err);
		});
	})
}

const count = () => {
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

export {insert, findByName, remove, getList, findAll, count}