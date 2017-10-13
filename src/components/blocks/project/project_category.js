import { Translate } from 'react-redux-i18n';
import React, { Component } from 'react';

import ProjectCategoryMusic from './project_category_music';
import ProjectCategoryOther from './project_category_other';

class ProjectCategory extends Component {
	render() {
		const { project, color } = this.props;

		const html = project.music ?
			<ProjectCategoryMusic project={project} /> :
			<ProjectCategoryOther project={project} />
		;

		return (
			<div 
				className="
					project 
					w3-light-grey
					category-content 
					w3-padding-large 
					w3-round-xxlarge 
					w3-panel w3-border 
				"
			>
				<h2 className={`project-title w3-text-${color}`}>
					<Translate value={`project.${project.slug}.name`} />
				</h2>
				{html}
			</div>
		);
	}
}

export default ProjectCategory;
