import nodebatis from '../config/dbconf';

const create = (name) => {
	return new Promise((resolve, reject) => {
		try {
			let time = new Date().toLocaleString();
			let [create_on, update_on] = [time, time];
			nodebatis.query('domain.insert', {name, create_on, update_on});
			let domain = nodebatis.query('domain.findOneByName', {name});
			resolve(domain);
		} catch (err){
			reject(err);
		}
	});
};

const remove = (id) => {
	return new Promise((resolve, reject) => {
		try {
			let result = nodebatis.query('domain.delete', {id});
			resolve(result);
		} catch (err) {
			reject (err);
		}
	})
}

const getList = (offset, length) => {
	return new Promise((resolve, reject) => {
		try {
			let result = nodebatis.query('domain.getList', {offset, length});
			resolve(result);
		} catch (err) {
			reject(err);
		}
	})
}
export {create, remove, getList}