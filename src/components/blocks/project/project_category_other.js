import { Translate } from 'react-redux-i18n';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectCategoryOther extends Component {
	render() {
		const project = this.props.project;

		const buttonClass = project.github ?
			'w3-container col-xs-12 col-sm-6 col-md-6 text-center' :
			'w3-container col-xs-12 text-center'
		;

		const github = project.github !== null ? 
			(<div className="w3-container col-xs-12 col-sm-6 col-md-6 text-center">
				<Link 
					className="
						w3-btn 
						w3-text-white 
						w3-grey 
						w3-round 
						w3-ripple 
						w3-padding-medium 
						w3-margin-bottom
					" 
					to={project.github} 
					target="_blank"
				>
					<i className="fa fa-github w3-margin-right" aria-hidden="true" />
					<Translate value="project.github.long" />
				</Link>
			</div>) :
			<noscript />
		;

		return (
			<div>
				<p className="w3-section w3-opacity text-justify">
					<Translate value={`project.${project.slug}.presentation`} dangerousHTML />
				</p>

				<div className="row">
					{github}
					<div className={buttonClass}>
						<Link
							className="
								w3-btn 
								w3-grey 
								w3-round 
								w3-ripple 
								w3-text-white 
								w3-margin-bottom
								w3-padding-medium 
							" 
							to={`/projects/${project.slug}`} 
						>
							<i className="fa fa-plus w3-margin-right" aria-hidden="true" />
							<Translate value="project.details" />
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectCategoryOther;
