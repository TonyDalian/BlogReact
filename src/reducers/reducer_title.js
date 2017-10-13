import { CHANGE_TITLE } from '../action/types';

export default function (state = '', action) {
	switch (action.type) {
		case CHANGE_TITLE:
			return action.payload;

		default:
			return state;
	}
}
