import axios from 'axios';

import { FETCH_PROJECTS, 
	FETCH_RESUME, 
	FETCH_ACADEMICS, 
	FETCH_CATEGORIES, 
	FETCH_TECHNOLOGIES,
	FETCH_EXPERIENCES,
	CHANGE_TITLE,
	LOAD_PROJECT,
	CLEAR_PROJECT } from './types';

export function getProjects(projects) {
	return dispatch => {
		dispatch({
			type: FETCH_PROJECTS,
			payload: projects
		});
	};
}

export function getCategories(categories) {
	return dispatch => {
		dispatch({
			type: FETCH_CATEGORIES,
			payload: categories
		});
	};
}

export function getTechnologies(technologies) {
	return dispatch => {
		dispatch({
			type: FETCH_TECHNOLOGIES,
			payload: technologies
		})
	}
}

export function getResume(resume) {
	return dispatch => {
		dispatch({
			type: FETCH_RESUME,
			payload: resume
		})
	}
}

export function getAcademics(academics) {
	return dispatch => {
		dispatch({
			type: FETCH_ACADEMICS,
			payload: academics
		})
	}
}

export function getExperiences(experiences) {
	return dispatch => {
		dispatch({
			type: FETCH_EXPERIENCES,
			payload: experiences
		})
	}
}

export function changeTitle(title) {
	return dispatch => {
		dispatch({
			type: CHANGE_TITLE,
			payload: title
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
