import { Translate } from 'react-redux-i18n';
import React, { Component } from 'react';
import _ from 'lodash';

import Academic from './academic';

class AcademicList extends Component {
	render() {
		const academics = _.map(
			this.props.academics, academic => (
				<Academic key={academic.id} academic={academic} locale={this.props.locale} />
			)
		);

		return (
			<div className="w3-card-4 w3-round">
				<header className="w3-container w3-amber">
					<h3>
						<i className="fa fa-graduation-cap w3-margin-right" aria-hidden="true" />
						<Translate value='resume.sections.academics' />
					</h3>
				</header>
				<div className="w3-padding-large">
					<ul className="w3-ul">
						{academics}
					</ul>
				</div>
			</div>
		);
	} 
}

export default AcademicList;
