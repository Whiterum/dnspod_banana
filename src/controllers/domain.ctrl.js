import {success, error} from '../common/result';
import * as Domain from '../services/domain.service';

export const create = async ctx => {
	let name = ctx.request.body.name;
	try {
		await Domain.insert(name);
		let domain = await Domain.findByName(name);
		ctx.body = success(domain);
	} catch (err) {
		ctx.body = err;
	}
}

export const getList = async ctx => {
	let cond = ctx.request.body;
	try {
		let domains = await Domain.getList(cond);
		let info = await Domain.count();
		ctx.body = success({info, domains});
	} catch (err) {
		ctx.body = err;
	}
}

export const remove = async ctx => {
	let id = ctx.request.body.id;
	try {
		await Domain.remove(id);
		ctx.body = success();
	} catch (err) {
		ctx.body = err;
	}
}