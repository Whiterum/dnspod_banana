import {success, error} from '../common/result';
import * as Domain from '../services/domain.service';
import nodebatis from '../config/dbconf';

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
		let [domains, info] = await Promise.all([Domain.getList(cond), Domain.count()]);
		ctx.body = success({info, domains});
	} catch (err) {
		ctx.body = err;
	}
}

export const remove = async ctx => {
	let id = ctx.request.body.id;
	try {
		await nodebatis.query('domain.remove', {id});
		ctx.body = success();
	} catch (err) {
		ctx.body = err;
	}
}