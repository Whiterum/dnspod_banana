import schema from 'validate';

const list = schema ({
	offset: {
		type: 'number',
		required: true,
		message: 'offset is a number and required'
	},
	length: {
		type: 'number',
		required: true,
		message: 'length is a number and required'
	}
});

export {list as listValidate}