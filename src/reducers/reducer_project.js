import { LOAD_PROJECT, CLEAR_PROJECT } from '../action/types';

export default function (state = { slug: '', locale: '', html: '' }, action) {
	switch (action.type) {
		case CLEAR_PROJECT:
			return { slug: '', locale: '', html: '' };

		case LOAD_PROJECT:
			return { slug: action.slug, locale: action.locale, html: action.payload };

		default:
			return state;
	}
}
