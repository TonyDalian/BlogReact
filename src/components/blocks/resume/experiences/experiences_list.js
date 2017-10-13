import { Translate } from 'react-redux-i18n';
import React, { Component } from 'react';
import _ from 'lodash';

import Experience from './experience';

class ExperienceList extends Component {
	render() {
		const experiences = _.map(
			this.props.experiences, experience => (
				<Experience key={experience.id} experience={experience} locale={this.props.locale} />
			)
		);

		return (
			<div className="w3-card-4 w3-round">
				<header className="w3-container w3-amber">
					<h3>
						<i className="fa fa-briefcase w3-margin-right" aria-hidden="true" />
						<Translate value='resume.sections.experiences' />
					</h3>
				</header>
				<div className="w3-padding-large">
					<ul className="w3-ul">
						{experiences}
					</ul>
				</div>
			</div>
		);
	} 
}

export default ExperienceList;
