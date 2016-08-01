import {success, error} from '../common/result';
import * as Domain from '../services/domain.service';
import * as Record from '../services/record.service';

const create = async (ctx, next) => {
	ctx.body = success();
}

const getList = async (ctx, next) => {

}

const remove = async (ctx, next) => {

}

export {create, getList, remove};