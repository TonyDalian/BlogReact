import React from 'react';
import { connect } from 'react-redux';
import { I18n, Translate } from 'react-redux-i18n';

import { changeTitle } from '../../action';

import ProjectPage from '../blocks/project/project_page';

class Project extends React.Component {
	componentWillUpdate() {
		const slug = this.props.match.params.slug;
		this.props.changeTitle(I18n.t(`project.${slug}.name`));
	}

	render() {
		const slug = this.props.match.params.slug;
		const project = _.filter(this.props.projects, project => project.slug == slug);

		if (project.length === 0)
			this.props.history.push('/home');

		return (
			<ProjectPage project={project[0]} />
		);
	} 
}

function mapStateToProps({ i18n, projects }) {
    const locale = i18n.locale;
	return { projects, locale };
}

export default connect(mapStateToProps, { changeTitle })(Project);

