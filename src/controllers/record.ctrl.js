import {success, error} from '../common/result';
import * as Domain from '../services/domain.service';
import * as Record from '../services/record.service';
import {recordValidate} from '../validate/record';

export const create = async ctx => {
	try {
		let cond = ctx.request.body;
		let errors = recordValidate.validate(cond);
		if (errors.length === 0) {
			let record = await Record.create(cond);
			ctx.body = success(record);
		} else {
			ctx.body = error(-1, {
				path: errors[0].path,
				message: errors[0].message
			});
		}
	} catch (err) {
		ctx.body = err;
	}
}

export const getList = async ctx => {
	try {
		let cond = ctx.request.body;
		// let records = await Record.getList(cond);
	}
}

export const modify = async ctx => {

}

export const remove = async ctx => {
	try {
		let cond = ctx.request.body;
		let error = 
	} catch (err) {

	}
}

export const search = async ctx => {

}