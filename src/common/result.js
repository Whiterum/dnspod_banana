import code from './status_code'

function success() {
	let result = {};
	Object.assign(result, code(1), arguments[0]);
	return result;
}

function error() {
	let result = {};
	if (arguments.length === 2){
		Object.assign(result, code(arguments[0]), arguments[1]);
	} else if (arguments.length === 1) {
		Object.assign(result, code(arguments[0]));
	}
	return result;
}

export {success, error}