import React from 'react';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';

import { loadProject, clearProject, changeTitle } from '../../action';

import Loading from './loading';

class Project extends React.Component {
	constructor(props) {
		super(props);

		this.state = { slug: this.props.match.params.slug };
		this.loadNewProject = this.loadNewProject.bind(this);
		this.changeTitle = this.changeTitle.bind(this);
	}

	componentWillMount() {
		const slug = this.props.match.params.slug;
		this.changeTitle(slug);

		if (slug !== this.props.project.slug) {
			this.loadNewProject(slug);
		}
	}

	componentWillReceiveProps(newProps) {
		const slug = newProps.match.params.slug;
		if (this.state.slug !== slug) {
			this.loadNewProject(slug);
		}
	}

	loadNewProject(slug) {
		this.setState({ slug });

		this.props.clearProject();
		this.props.loadProject(slug, this.props.locale, this.props.history);

		this.changeTitle(slug);
	}

	changeTitle(slug) {
		this.props.changeTitle(I18n.t(`project.${slug}.name`));
	}

	render() {
		if (this.props.project.html !== '') {
			return (
				<div dangerouslySetInnerHTML={{ __html: this.props.project.html }} />
			);
		}

		return (
			<div style={{ minHeight: '60vh' }}>
				<Loading />
			</div>
		);
	} 
}

function mapStateToProps({ i18n, project }) {
    const locale = i18n.locale;
	return { project, locale };
}

export default connect(mapStateToProps, 
	{ loadProject, clearProject, changeTitle }
)(Project);

