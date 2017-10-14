import { Translate } from 'react-redux-i18n';
import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import EHubPresentation from './presentation/ehub';
import EHubContent from './content/ehub';

class DevProject extends Component {
	render() {
		let content, presentation;
		const slug = this.props.project.slug;
		
		switch(slug) {
			case 'ehub':
				presentation = (<EHubPresentation />);
				content = (<EHubContent />);
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
								{presentation}
							</div>
						</div>
						
						{content}
					</div>
				</div>
			</div>
		);
	}
}

export default DevProject;
