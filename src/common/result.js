import code from './status_code'

// successful
 
const success = () => {
	var result = {};
	Object.assign(result, code(1), arguments[0]);
	return result;
}

// work is error
const error = (num) => {
	return code(num);
}

export {success, error};