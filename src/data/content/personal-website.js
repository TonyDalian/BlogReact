import React, { Component } from 'react';
import { connect } from 'react-redux';

class PersonalWebsite extends Component {
	render() {
		const content = this.props.locale === 'fr' ? (
			<div>
				<p className="text-justify">Créé avec <a className="w3-text-theme" href="http://symfony.com/" title="Voir le site de Symfony 3." target="_blank">Symfony 3</a> de <a className="w3-text-theme" href="https://sensiolabs.com/" title="Voir le site de SensioLabs." target="_blank">SensioLabs</a>, et <a className="w3-text-theme" href="http://gudh.github.io/ihover/dist/" title="Voir le site d'iHover." target="_blank">iHover</a>.</p>
			</div>
		) : (
			<div>
				<p className="text-justify">Powered by <a className="w3-text-theme" href="http://symfony.com/" title="Visit the Symfony 3 website." target="_blank">Symfony 3</a> from <a className="w3-text-theme" href="https://sensiolabs.com/" title="Go to SensioLabs." target="_blank">SensioLabs</a>, and using <a className="w3-text-theme" href="http://gudh.github.io/ihover/dist/" title="Visit iHover website." target="_blank">iHover</a>.</p>
			</div>
		);

		return content;
	}
}

function mapStateToProps({ i18n }) {
    const locale = i18n.locale;
    return { locale };
}

export default connect(mapStateToProps)(PersonalWebsite);
