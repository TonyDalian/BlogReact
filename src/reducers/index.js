import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import { reducer as formReducer } from 'redux-form';

import ReducerName from './reducer_name';
import ReducerTitle from './reducer_title';
import ReducerResume from './reducer_resume';
import ReducerProjects from './reducer_projects';
import ReducerAcademics from './reducer_academics';
import ReducerCategories from './reducer_categories';
import ReducerExperiences from './reducer_experiences';

const rootReducer = combineReducers({
	experiences: ReducerExperiences,
	categories: ReducerCategories,
	academics: ReducerAcademics,
	projects: ReducerProjects,
	resume: ReducerResume,
	title: ReducerTitle,
	name: ReducerName,
	form: formReducer,
	i18n: i18nReducer
});

export default rootReducer;
