/*
 * all status code
 * status code info are config in this file
 */
var code = {
	"-1": "Login failed",
	"-2": "API use limit is exceeded",
	"-3": "not a legal proxy",
	"-4": "Not in the name of the agent",
	"-7": "No right to use this interface",
	"-8": "Excessive failed logins , account has been temporarily banned",
	"85": "Account remote login , the request is denied",
	"-99": "This feature is temporarily closed , please try again later",
	"1": "Action completed successful",
	"2": "Only allow the POST method",
	"3": "unknown mistake",
	"6": "User ID error",
	"7": "The user is not in your name",
	"83": "This account has been locked and can not carry out any operation",
	"85": "The account login open area protection , current IP is not allowed within the region"
}

export default function(num) {
	return {
		code: num,
		message: code[num],
		create_at: new Date().toLocaleString()
	}
}