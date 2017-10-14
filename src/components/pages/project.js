import React from 'react';
import { connect } from 'react-redux';
import { I18n, Translate } from 'react-redux-i18n';

import { changeTitle } from '../../action';

class Project extends React.Component {
	constructor(props) {
		super(props);

		this.changeTitle = this.changeTitle.bind(this);
	}

	changeTitle(slug) {
		this.props.changeTitle(I18n.t(`project.${slug}.name`));
	}

	render() {
		const slug = this.props.match.params.slug;

		if (!_.includes(
				_.map(this.props.projects, project => project.slug),
				slug
			))
			this.props.history.push('/home');

		this.changeTitle(slug);

		return (
			<div className="w3-white w3-padding-xxlarge">
				<div className="project-page">
					<div className="w3-panel w3-border w3-center w3-round w3-card-4 w3-theme w3-text-white">
					  	<h1 className="w3-text-shadow w3-wide"><b><Translate value={`project.${slug}.name`} /></b></h1>
					</div>
					
					<div className="w3-container project-body w3-padding-xxlarge w3-panel w3-border w3-round-xxlarge w3-light-grey">
						<div className="w3-layout-container w3-section">
							<div className="w3-container w3-layout-cell text-justify w3-container">
								<p className="w3-margin-0 w3-layout-top"><Translate value={`project.${slug}.presentation`} />}</p>
							</div>
						</div>
						<img class="img-responsive center-block w3-section" src={`/bundles/pllcore/images/projects/${slug}.png`} />
					</div>
				</div>
			</div>
		);
	} 
}

function mapStateToProps({ i18n, projects }) {
    const locale = i18n.locale;
	return { projects, locale };
}

export default connect(mapStateToProps, { changeTitle })(Project);

