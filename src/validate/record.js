import schema from 'validate';

export default schema({
	dns: {
		type: 'string',
		required: true,
		message: 'dnsId is required'
	},
	name: {
		type: 'string',
		required: true,
		message: 'record name is required'
	},
	type: {
		type: 'string',
		required: true,
		message: 'type is required'
	},
	value: {
		type: 'string',
		required: true,
		message: 'value is required'
	},
	mx: {
		type: 'string',
		required: true,
		message: 'mx is required'
	},
	enable: {
		type: 'string',
		required: true,
		message: 'enable is required'
	}
});