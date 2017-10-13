import { Translate } from 'react-redux-i18n';
import React, { Component } from 'react';

class Download extends Component {
	render() {
		const locale = this.props.locale;
		const color = `/cv/${locale}-color.pdf`;
		const blackandwhite = `/cv/${locale}-blackandwhite.pdf`;
		const btnclass = 'w3-btn w3-theme w3-round w3-ripple w3-padding-large w3-margin-bottom';

		return (
			<div className="w3-card-4 w3-round">
				<header className="w3-container w3-amber">
					<h3>
						<i className="fa fa-file-pdf-o w3-margin-right" aria-hidden="true" />
						<Translate value="resume.sections.download" />
					</h3>
				</header>
				<div className="w3-container">
					<p className="w3-opacity w3-section">
						<Translate value="resume.download.help" dangerousHTML />
					</p>
					<div className="row">
						<div className="col-sm-6 text-center">
							<a 
								href={color} 
								rel='noopener noreferrer' 
								target="_blank" 
								className={btnclass} 
								role="button"
							>
								<i className="fa fa-download w3-margin-right" aria-hidden="true" />
								<Translate value="resume.download.buttons.colored" />
								<i className="fa fa-download w3-margin-left" aria-hidden="true" />
							</a>
						</div>
						<div className="col-sm-6 text-center">
							<a 
								href={blackandwhite} 
								rel='noopener noreferrer' 
								target="_blank" 
								className={btnclass} 
								role="button"
							>
								<i className="fa fa-download w3-margin-right" aria-hidden="true" />
								<Translate value="resume.download.buttons.blackwhite" />
								<i className="fa fa-download w3-margin-left" aria-hidden="true" />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	} 
}

export default Download;
