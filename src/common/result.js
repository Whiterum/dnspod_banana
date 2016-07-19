/**
 * return data struct 
 *
 */
import code from './status_code'

/*
 * work is successful
 */
export function success() {
	var result = null;
	if (arguments.length == 1) {
		result = {
			status: code(1),
			result:arguments[0]
		}
	} else if (arguments.length == 0) {
		result = {
			status: code(1)
		}
	} else if (arguments.length == 2) {
		result = {
			status: code(1),
			result:arguments[1]
		}
	}
	return result;
}

/**
 * work is error
 */
export function error(num) {
	return {
		status: code(num),
	}
}