import { Translate } from 'react-redux-i18n';
import React, { Component } from 'react';

class ProjectHeader extends Component {
	render() {
		const project = this.props.project;
		const slug = project.slug;

		const content = this.props.project.music ?
			(<iframe width="560" height="315" src={`https://www.youtube.com/embed/${project.github}`} frameborder="0" allowfullscreen></iframe>) :
			(<p className="w3-margin-0 w3-layout-top"><Translate value={`project.${slug}.presentation`} dangerousHTML />}</p>);

		return (
			<div className="w3-white w3-padding-xxlarge">
				<div className="project-page">
					<div className="w3-panel w3-border w3-center w3-round w3-card-4 w3-theme w3-text-white">
					  	<h1 className="w3-text-shadow w3-wide"><b><Translate value={`project.${slug}.name`} /></b></h1>
					</div>
					
					<div className="w3-container project-body w3-padding-xxlarge w3-panel w3-border w3-round-xxlarge w3-light-grey">
						<div className="w3-layout-container w3-section">
							<div className="w3-container w3-layout-cell text-justify w3-container">
								{content}
							</div>
						</div>
						
						<img className="img-responsive center-block w3-section" src={`/bundles/pllcore/images/projects/${slug}.png`} />
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectHeader;
