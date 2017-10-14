import React from 'react';
import { connect } from 'react-redux';
import { I18n, Translate } from 'react-redux-i18n';

import { changeTitle } from '../../action';

import DevProject from '../blocks/projects/dev-project';
import MusicProject from '../blocks/projects/music-project';

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

		if(project[0].music) {
			return (<MusicProject project={project[0]} />);
		} else {
			return (<DevProject project={project[0]} />);
		}
	} 
}

function mapStateToProps({ i18n, projects }) {
    const locale = i18n.locale;
	return { projects, locale };
}

export default connect(mapStateToProps, { changeTitle })(Project);

