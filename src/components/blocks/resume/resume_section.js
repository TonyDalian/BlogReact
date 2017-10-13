import React, { Component } from 'react';
import _ from 'lodash';

import ResumeLine from './resume_line';

class ResumeSection extends Component {
	render() {
		const section = this.props.section;

		const lines = _.map(
			section.lines, line => (
				<ResumeLine key={line.id} line={line} locale={this.props.locale} />
			)
		);

		return (
			<div>
				{ lines }
				<br />
			</div>
		);
	} 
}

export default ResumeSection;
