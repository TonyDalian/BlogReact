import React, { Component } from 'react';
import _ from 'lodash';

import ResumeSection from './resume_section';

class ResumeBlock extends Component {
	render() {
		const block = this.props.block;
		const name = block[`name_${this.props.locale}`];

		const sections = _.map(
			block.sections, section => (
				<ResumeSection key={section.id} section={section} locale={this.props.locale} />
			)
		);

		return (
			<div className="w3-card-4 w3-round">
				<header className="w3-container w3-amber">
					<h3>
						<i className={`fa ${block.class} w3-margin-right`} aria-hidden="true" />
						{ name }
					</h3>
				</header>
				<div className="w3-padding-large">
					<dl className="dl-horizontal">
						{ sections }
					</dl>
				</div>
			</div>
		);
	} 
}

export default ResumeBlock;
