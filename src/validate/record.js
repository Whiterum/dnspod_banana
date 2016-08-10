import schema from 'validate';

const record = schema({
	do_id: {
		type: 'number',
		required: true,
		message: 'dnsId is a number and required'
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

const remove = schema({
	do_id: {
		type: 'number',
		required: true,
		message: 'do_id is required'
	},
	
})
export {record as recordValidate}