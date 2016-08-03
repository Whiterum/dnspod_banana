import code from './status_code'

function success() {
	let result = {};
	Object.assign(result, code(1), arguments[0]);
	return result;
}

const error = (num) => {
	return code(num);
}

export {success, error}