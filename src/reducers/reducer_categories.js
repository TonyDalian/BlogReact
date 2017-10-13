import _ from 'lodash';

import { FETCH_CATEGORIES } from '../action/types';

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_CATEGORIES:
			return action.payload == null ? {} : _.mapKeys(action.payload, 'id');

		default:
			return state;
	}
}
