import { I18n, Translate } from 'react-redux-i18n';
import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

class DevProject extends Component {
	renderCategoriesList(project) {
		return _.join(
			_.map(
				_.filter(this.props.categories, category => {
					return _.includes(project.categories, category.id);
				}), 
				category => I18n.t(`category.${category.slug}.title`)
			),
			', '
		);
	}

	render() {
		const project = this.props.project;
		const categories = this.renderCategoriesList(project);
		const slug = project.slug;
		const Content = project.content;

		const github = project.github !== null ?
			(<a href={project.github} target="_blank" className="w3-btn w3-grey w3-round w3-ripple w3-padding-medium w3-margin-bottom w3-text-white" role="button"><i className="fa fa-github w3-margin-right" aria-hidden="true" /><Translate value="project.github.long" /></a>) :
			(<noscript />)
		;

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
						
						<Content />

						<p className="w3-opacity">Categories : {categories}.</p>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ categories }) {
    return { categories };
}

export default connect(mapStateToProps)(DevProject);
