import _ from 'lodash';

import { FETCH_RESUME } from '../action/types';

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_RESUME:
			return action.payload == null ? {} : _.mapKeys(action.payload, 'id');

		default:
			return state;
	}
}
