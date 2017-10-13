import _ from 'lodash';

import { FETCH_EXPERIENCES } from '../action/types';

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_EXPERIENCES:
			return action.payload == null ? {} : _.mapKeys(action.payload, 'id');

		default:
			return state;
	}
}
