import { Translate } from 'react-redux-i18n';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectCategoryMusic extends Component {
	render() {
		const project = this.props.project;

		return (
			<div className="row w3-margin-top">
				<div className="col-xs-12 col-sm-6 col-md-offset-2 col-md-4 text-center">
					<Link 
						to={`https://www.youtube.com/watch?v=${project.github}`} 
						className="
							w3-btn 
							w3-grey 
							w3-round 
							w3-ripple 
							w3-text-white 
							w3-margin-bottom
							w3-padding-medium 
						" 
						target="_blank" 
						role="button"
					>
						<i className="fa fa-youtube w3-margin-right" aria-hidden="true" /> Youtube
					</Link>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-4 text-center">
					<Link 
						to={`/projects/${project.slug}`} 
						className="
							w3-btn 
							w3-grey 
							w3-round 
							w3-ripple 
							w3-text-white 
							w3-margin-bottom
							w3-padding-medium 
						" 
						role="button"
					>
						<i className="fa fa-plus w3-margin-right" aria-hidden="true" /> 
						<Translate value="project.details" />
					</Link>
				</div>
			</div>
		);
	}
}

export default ProjectCategoryMusic;
