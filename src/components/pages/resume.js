import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';

import { getResume, getAcademics, getExperiences, changeTitle } from '../../action';

import Loading from './loading';
import Download from '../blocks/resume/download';
import ResumeBlock from '../blocks/resume/resume_block';
import AcademicsList from '../blocks/resume/academics/academics_list';
import ExperiencesList from '../blocks/resume/experiences/experiences_list';

class Resume extends React.Component {
	componentWillMount() {
		this.props.changeTitle(I18n.t('titles.resume'));
	}

	render() {
		const academics = (
			<AcademicsList academics={this.props.academics} locale={this.props.locale} />
		);

		const experiences = (
			<ExperiencesList experiences={this.props.experiences} locale={this.props.locale} />
		);

		const blocks = _.map(
			this.props.resume, resumeBlock => (
				<ResumeBlock key={resumeBlock.id} block={resumeBlock} locale={this.props.locale} />
			)
		);

		return (
			<div className="w3-white">
				<div className="resume w3-container w3-padding-24">
					<Download locale={this.props.locale} />
					{blocks}
					{experiences}
					{academics}
				</div>
			</div>
		);
	} 
}


function mapStateToProps({ i18n, resume, academics, experiences }) {
    const locale = i18n.locale;
	return { resume, academics, experiences, locale };
}

export default connect(mapStateToProps, 
	{ getResume, getAcademics, getExperiences, changeTitle }
)(Resume);
