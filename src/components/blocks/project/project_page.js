import { Translate } from 'react-redux-i18n';
import React, { Component } from 'react';

import ProjectHeader from './project_header'

class ProjectPage extends Component {
	render() {
		return (
			<ProjectHeader project={this.props.project} />
		);
	}
}

export default ProjectPage;
