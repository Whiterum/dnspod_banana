import {success, error} from '../common/result';
import * as Domain from '../services/domain.service';
import nodebatis from '../config/dbconf';
import {listValidate} from '../validate/domain';

export const create = async ctx => {
	let name = ctx.request.body.name;
	try {
		let domain = await Domain.create(name);
		ctx.body = success(domain);
	} catch (err) {
		ctx.body = err;
	}
}

export const getList = async ctx => {
	let cond = ctx.request.body;
	try {
		let errors = listValidate.validate(cond);
		if (errors.length === 0) {
			let [domains, info] = await Domain.getList(cond);
			ctx.body = success({info, domains});
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

export const remove = async ctx => {
	let id = ctx.request.body.id;
	try {
		await nodebatis.execute('domain.remove', {id});
		ctx.body = success();
	} catch (err) {
		ctx.body = err;
	}
}
