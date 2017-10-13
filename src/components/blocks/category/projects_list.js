import { Translate } from 'react-redux-i18n';
import React, { Component } from 'react';
import _ from 'lodash';

import ProjectCategory from '../project/project_category';
import CategoryTitle from '../category/category_title';

class ProjectsList extends Component {
	render() {
		const category = this.props.category;
		const projects = 
			this.props.projects.length === 0 ?
			<Translate value="category.empty"/> :
			_.map(
			this.props.projects, project => (
				<ProjectCategory key={project.id} project={project} color={category.color} />
			)
		);

		console.log(this.props.projects);

		return (
			<div>
				<CategoryTitle category={category} />
				{projects}
			</div>
		);
	} 
}

export default ProjectsList;
