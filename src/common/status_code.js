/*
 * all status code
 * status code info are config in this file
 */
var code = {
}

export default function(num) {
	return {
		status: {
			code: num,
			message: code[num],
			create_at: new Date().toLocaleString()
		}
	}
}