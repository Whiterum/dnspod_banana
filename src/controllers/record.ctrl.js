import {success, error} from '../common/result';
import * as Domain from '../services/domain.service';
import * as Record from '../services/record.service';
import recordCreateVal from '../validate/record';
import recordRemoveVal from '../validate/record_remove';

export const create = async ctx => {
	try {
		let cond = ctx.request.body;
		let errors = recordCreateVal.validate(cond);
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
	
}

export const modify = async ctx => {

}

export const remove = async ctx => {
	try {
		let cond = ctx.request.body;
		let errors = recordRemoveVal.validate(cond);
		if (errors.length === 0) {
			await Record.remove(cond);
			ctx.body = success();
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

export const search = async ctx => {

}