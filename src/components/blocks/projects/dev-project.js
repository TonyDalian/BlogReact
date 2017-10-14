import { Translate } from 'react-redux-i18n';
import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import EHubContent from './content/ehub';
import DansLe1000Content from './content/dans-le-1000';
import IntellifridgeContent from './content/intellifridge';
import VolumeManagerContent from './content/volume-manager';
import PersonalWebsiteContent from './content/personal-website';
import RaidTeamGeneratorContent from './content/raid-team-generator';

class DevProject extends Component {
	render() {
		let content;
		const slug = this.props.project.slug;

		const github = this.props.project.github !== null ?
			(<a href={this.props.project.github} target="_blank" className="w3-btn w3-grey w3-round w3-ripple w3-padding-medium w3-margin-bottom w3-text-white" role="button"><i className="fa fa-github w3-margin-right" aria-hidden="true" /><Translate value="project.github.long" /></a>) :
			(<noscript />)
		;
		
		switch(slug) {
			case 'dans-le-1000':
				content = (<DansLe1000Content />);
				break;
			case 'ehub':
				content = (<EHubContent />);
				break;
			case 'intellifridge':
				content = (<IntellifridgeContent />);
				break;
			case 'personal-website':
				content = (<PersonalWebsiteContent />);
				break;
			case 'volume-manager':
				content = (<VolumeManagerContent />);
				break;
			case 'raid-team-generator':
				content = (<RaidTeamGeneratorContent />);
				break;
			default: 
				return (<Redirect to="/home" />);
		}

		return (
			<div className="w3-white w3-padding-xxlarge">
				<div className="project-page">
					<div className="w3-panel w3-border w3-center w3-round w3-card-4 w3-theme w3-text-white">
					  	<h1 className="w3-text-shadow w3-wide"><b><Translate value={`project.${slug}.name`} /></b></h1>
					</div>
					
					<div className="w3-container project-body w3-padding-xxlarge w3-panel w3-border w3-round-xxlarge w3-light-grey">
						<div className="w3-layout-container w3-section">
							<div className="w3-container w3-layout-cell text-justify w3-container">
								<p className="w3-margin-0 w3-layout-top"><Translate value={`project.${slug}.presentation`} dangerousHTML /></p>
							</div>
						</div>

						<img className="img-responsive center-block w3-section" src={`/bundles/pllcore/images/projects/${slug}.png`}  />
						
						{content}

						{github}
					</div>
				</div>
			</div>
		);
	}
}

export default DevProject;
