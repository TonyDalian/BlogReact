import _ from 'lodash';

export const ALL = 'ALL';
export const MENU = 'MENU';
export const HOMEPAGE = 'HOMEPAGE';
export const PORTFOLIO = 'PORTFOLIO';
export const WORK_IN_PROGRESS = 'WORK_IN_PROGRESS';

export const FilterPosts = (projects, filter) => {
	switch (filter) {
		case MENU:
			return _.filter(projects, project => project.menu);

		case HOMEPAGE:
			return _.filter(projects, project => project.homepage);

		case PORTFOLIO:
			return _.filter(projects, project => project.portfolio);

		case WORK_IN_PROGRESS:
			return _.filter(projects, project => project.dev);

		default:
			return projects;
	}
};

export const PostsForCategory = (projects, category) => 
	_.filter(projects, project => project.categories.includes(category.id))
;
