import _ from 'lodash';

import { FETCH_TECHNOLOGIES } from '../action/types';

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_TECHNOLOGIES:
			return action.payload == null ? {} : _.mapKeys(action.payload, 'id');

		default:
			return state;
	}
}
