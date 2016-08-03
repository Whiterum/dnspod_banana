import {success,error} from '../common/result';
import * as Domain from '../services/domain.service';
import nodebatis from '../config/dbconf';

const create = async (ctx, next) => {
	let name = ctx.request.body.name;
	try {
		let result = await nodebatis.query('domain.findOneByName', {name});
		if (result.length === 0){
			let domain = await Domain.create(name);
			domain = domain[0];
			ctx.body = success({domain});
		} else {
			ctx.body = error(7);
		}
	} catch (err) {
		ctx.body = err;
	}
}

const getList = async (ctx, next) => {
	let cond = ctx.request.body;
	let domains, info = {};
	try {
		if ('offset' in cond && 'length' in cond){
			let {offset:offset, length:length} = cond;
			domains = await Domain.getList(offset, length);
		} else {
			domains = await nodebatis.query('domain.findAll');
		}
		let result = await nodebatis.query('domain.count');
		Object.assign(info, result[0]);
		ctx.body = success({info, domains});
	} catch (err){
		ctx.body = err;
	}
}

const remove = async (ctx, next) => {
	let id = ctx.request.body.id;
	try {
		await Domain.remove(id);
		ctx.body = success();
	} catch(err) {
		ctx.body = err;
	}
}

export {create, getList, remove};