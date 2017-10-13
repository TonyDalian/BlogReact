import _ from 'lodash';

import { FETCH_ACADEMICS } from '../action/types';

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_ACADEMICS:
			return action.payload == null ? {} : _.mapKeys(action.payload, 'id');

		default:
			return state;
	}
}
