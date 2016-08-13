import schema from 'validate';

export default schema({
	do_id: {
		type: 'number',
		required: true,
		message: 'do_id is invalidate'
	},
	re_id: {
		type: 'string',
		required: true,
		message: 're_id is invalidate'
	}
})