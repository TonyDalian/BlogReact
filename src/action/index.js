import axios from 'axios';

import { FETCH_PROJECTS, 
	FETCH_RESUME, 
	FETCH_ACADEMICS, 
	FETCH_CATEGORIES, 
	FETCH_EXPERIENCES,
	CHANGE_TITLE,
	LOAD_PROJECT,
	CLEAR_PROJECT } from './types';

export function getProjects() {
	return dispatch => {
		axios
			.get(`${window.location.origin}/api/projects`)
			.then(response => dispatch({
				type: FETCH_PROJECTS,
				payload: response.data
			}))
		;
	};
}

export function getCategories() {
	return dispatch => {
		axios
			.get(`${window.location.origin}/api/categories`)
			.then(response => dispatch({
				type: FETCH_CATEGORIES,
				payload: response.data
			}))
		;
	};
}

export function getResume() {
	return dispatch => {
		axios
			.get(`${window.location.origin}/api/resume`)
			.then(response => dispatch({
				type: FETCH_RESUME,
				payload: response.data
			}))
		;
	};
}

export function getAcademics() {
	return dispatch => {
		axios
			.get(`${window.location.origin}/api/academics`)
			.then(response => dispatch({
				type: FETCH_ACADEMICS,
				payload: response.data
			}))
		;
	};
}

export function getExperiences() {
	return dispatch => {
		axios
			.get(`${window.location.origin}/api/experiences`)
			.then(response => dispatch({
				type: FETCH_EXPERIENCES,
				payload: response.data
			}))
		;
	};
}

export function changeTitle(title) {
	return dispatch => {
		dispatch({
			type: CHANGE_TITLE,
			payload: title
		});
	};
}

export function loadProject(slug, locale, history) {
	return dispatch => {
		axios
			.get(`${window.location.origin}/api/project/${slug}/${locale}`)
			.then(response => dispatch({
				slug,
				locale,
				type: LOAD_PROJECT,
				payload: response.data
			}), 
				error => history.push('/')
			)
		;
	};
}

export function clearProject() {
	return dispatch => {
		dispatch({
			type: CLEAR_PROJECT,
			payload: ''
		});
	};
}

export function formSend(data, callback) {
	return dispatch => {
		axios
			.post('/api/contact', data)
			.then(response => {
				callback(response);
			})
		;
	};
}
