import React, { Component } from 'react';
import { connect } from 'react-redux';

class Intellifridge extends Component {
	render() {
		const content = this.props.locale === 'fr' ? (
			<div>
				<p className="text-justify">Pour le moment, l'application n'est qu'à l'état de prototype avec les fonctionnalités de base. Le développement est actuellement en pause.</p>
			</div>
		) : (
			<div>
				<p className="text-justify">As of now, the application is just a prototype with only the basic functionalities. The development process is currently in standby.</p>
			</div>
		);

		return content;
	}
}

function mapStateToProps({ i18n }) {
    const locale = i18n.locale;
    return { locale };
}

export default connect(mapStateToProps)(Intellifridge);
