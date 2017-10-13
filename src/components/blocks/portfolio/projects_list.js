import React, { Component } from 'react';
import _ from 'lodash';

import ProjectPortfolio from '../project/project_portfolio';
import CategoryTitle from '../category/category_title';

class ProjectsList extends Component {
	render() {
		const category = this.props.active;
		const projects = _.map(
			this.props.projects, project => (
				<ProjectPortfolio key={project.id} project={project} color={category.color} />
			)
		);

		return (
			<div>
				<CategoryTitle category={category} />
				{projects}
			</div>
		);
	} 
}

export default ProjectsList;
