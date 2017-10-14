import React, { Component } from 'react';
import { connect } from 'react-redux';

class RaidTeamGenerator extends Component {
	render() {
		const content = this.props.locale === 'fr' ? (
			<div>
				<a href="http://raidteamgenerator.com/" className="w3-btn w3-grey w3-round w3-ripple w3-padding-medium w3-margin-bottom w3-text-white" target="_blank" role="button">Accéder au site<i className="fa fa-arrow-right w3-margin-left" aria-hidden="true" /></a>

				<p className="text-center w3-margin-bottom">
					<span className="w3-padding-small">Accédez à des statistiques détaillées sur vos joueurs et compositions.</span><br />
					<a href="/bundles/pllcore/images/projects/raidteamgenerator/1500x817/insights_fr.png" title="Voir l&#39;image en grand." target="_blank"><img className="img-responsive center-block" src="/bundles/pllcore/images/projects/RaidTeamGenerator/600x327/insights_fr.png" /></a>
				</p>
				<p className="text-center w3-margin-bottom">
					<span className="w3-padding-small">Paramétrez librement les builds joués.</span><br />
					<a href="/bundles/pllcore/images/projects/raidteamgenerator/1500x817/builds_fr.png" title="Voir l&#39;image en grand." target="_blank"><img className="img-responsive center-block" src="/bundles/pllcore/images/projects/RaidTeamGenerator/600x327/builds_fr.png" /></a>
				</p>
				<p className="text-center w3-margin-bottom">
					<span className="w3-padding-small">Renseignez vos joueurs et leurs préférences.</span><br />
					<a href="/bundles/pllcore/images/projects/raidteamgenerator/1500x817/players_fr.png" title="Voir l&#39;image en grand." target="_blank"><img className="img-responsive center-block" src="/bundles/pllcore/images/projects/RaidTeamGenerator/600x327/players_fr.png" /></a>
				</p>
				<p className="text-center w3-margin-bottom">
					<span className="w3-padding-small">Créez vos compositions par boss de raid.</span><br />
					<a href="/bundles/pllcore/images/projects/raidteamgenerator/1500x817/compositions_fr.png" title="Voir l&#39;image en grand." target="_blank"><img className="img-responsive center-block" src="/bundles/pllcore/images/projects/RaidTeamGenerator/600x327/compositions_fr.png" /></a>
				</p>
				<p className="text-center w3-margin-bottom">
					<span className="w3-padding-small">Oragnisez vos sorties.</span><br />
					<a href="/bundles/pllcore/images/projects/raidteamgenerator/1500x817/events_fr.png" title="Voir l&#39;image en grand." target="_blank"><img className="img-responsive center-block" src="/bundles/pllcore/images/projects/RaidTeamGenerator/600x327/events_fr.png" /></a>
				</p>
				<p className="text-center w3-margin-bottom">
					<span className="w3-padding-small">Générez automatiquement les équipes.</span><br />
					<a href="/bundles/pllcore/images/projects/raidteamgenerator/1500x817/teams_fr.png" title="Voir l&#39;image en grand." target="_blank"><img className="img-responsive center-block" src="/bundles/pllcore/images/projects/RaidTeamGenerator/600x327/teams_fr.png" /></a>
				</p>

				<p className="text-justify">Créé avec <a className="w3-text-theme" href="http://symfony.com/" title="Voir le site de Symfony 3." target="_blank">Symfony 3</a> de <a className="w3-text-theme" href="https://sensiolabs.com/" title="Voir le site de SensioLabs." target="_blank">SensioLabs</a>.</p>
			</div>
		) : (
			<div>
				<a href="http://raidteamgenerator.com/" className="w3-btn w3-grey w3-round w3-ripple w3-padding-medium w3-margin-bottom w3-text-white" target="_blank" role="button">Live website<i className="fa fa-arrow-right w3-margin-left" aria-hidden="true" /></a>

				<p className="text-center w3-margin-bottom">
					<span className="w3-padding-small">Get detailed insights about your players and compositions.</span><br />
					<a href="/bundles/pllcore/images/projects/raidteamgenerator/1500x817/insights_en.png" title="See a wider screenshot." target="_blank"><img className="img-responsive center-block" src="/bundles/pllcore/images/projects/RaidTeamGenerator/600x327/insights_en.png" /></a>
				</p>
				<p className="text-center w3-margin-bottom">
					<span className="w3-padding-small">Freely set the builds you are using.</span><br />
					<a href="/bundles/pllcore/images/projects/raidteamgenerator/1500x817/builds_en.png" title="See a wider screenshot." target="_blank"><img className="img-responsive center-block" src="/bundles/pllcore/images/projects/RaidTeamGenerator/600x327/builds_en.png" /></a>
				</p>
				<p className="text-center w3-margin-bottom">
					<span className="w3-padding-small">Register your players and their preferences.</span><br />
					<a href="/bundles/pllcore/images/projects/raidteamgenerator/1500x817/players_en.png" title="See a wider screenshot." target="_blank"><img className="img-responsive center-block" src="/bundles/pllcore/images/projects/RaidTeamGenerator/600x327/players_en.png" /></a>
				</p>
				<p className="text-center w3-margin-bottom">
					<span className="w3-padding-small">Create compositions per raid boss.</span><br />
					<a href="/bundles/pllcore/images/projects/raidteamgenerator/1500x817/compositions_en.png" title="See a wider screenshot." target="_blank"><img className="img-responsive center-block" src="/bundles/pllcore/images/projects/RaidTeamGenerator/600x327/compositions_en.png" /></a>
				</p>
				<p className="text-center w3-margin-bottom">
					<span className="w3-padding-small">Add and manage events.</span><br />
					<a href="/bundles/pllcore/images/projects/raidteamgenerator/1500x817/events_en.png" title="See a wider screenshot." target="_blank"><img className="img-responsive center-block" src="/bundles/pllcore/images/projects/RaidTeamGenerator/600x327/events_en.png" /></a>
				</p>
				<p className="text-center w3-margin-bottom">
					<span className="w3-padding-small">Easily generate your teams.</span><br />
					<a href="/bundles/pllcore/images/projects/raidteamgenerator/1500x817/teams_en.png" title="See a wider screenshot." target="_blank"><img className="img-responsive center-block" src="/bundles/pllcore/images/projects/RaidTeamGenerator/600x327/teams_en.png" /></a>
				</p>

				<p className="text-justify">Powered by <a className="w3-text-theme" href="http://symfony.com/" title="Visit the Symfony 3 website." target="_blank">Symfony 3</a> from <a className="w3-text-theme" href="https://sensiolabs.com/" title="Go to SensioLabs." target="_blank">SensioLabs</a>.</p>
			</div>
		);

		return content;
	}
}

function mapStateToProps({ i18n }) {
    const locale = i18n.locale;
    return { locale };
}

export default connect(mapStateToProps)(RaidTeamGenerator);
