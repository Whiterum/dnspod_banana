/*
 * all status code
 * status code info are config in this file
 */
var code = {
	"1": "Action completed successful",
	"6": "域名无效",
	"7": "域名已存在",
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