import { Translate } from 'react-redux-i18n';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectPortfolio extends Component {
	render() {
		const project = this.props.project;

		return (
			<div 
				className="
					project 
					project-portfolio 
					category-content 
					col-xs-12 col-sm-6 col-lg-4
				"
			>
				<div className="ih-item square effect6 from_left_and_right w3-card-12">
					<Link to={`/projects/${project.slug}`}>
						<div className="img">
							<img 
								alt={`${project.slug}`} 
								src={`/bundles/pllcore/images/projects/${project.slug}.png`} 
							/>
						</div>
						<div className="mask1" />
						<div className="mask2" />
						<div className="info">
							<h3><Translate value={`project.${project.slug}.name`} /></h3>
							<p><Translate value={`project.${project.slug}.portfolio`} /></p>
						</div>
						<div className="w3-container w3-center project-title">
							<p className={`w3-text-${this.props.color}`}>
								<Translate value={`project.${project.slug}.name`} />
							</p>
						</div>
					</Link>
				</div>
			</div>
		);
	}
}

export default ProjectPortfolio;
