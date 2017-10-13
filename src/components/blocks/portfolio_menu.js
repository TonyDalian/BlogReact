import { Translate } from 'react-redux-i18n';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { FilterPosts, HOMEPAGE } from '../../helpers/project_selector';

class PortfolioMenu extends Component {
	renderProjects() {
        return _.map(this.props.projects, project => (
			<li key={project.id}>
				<Link to={`/projects/${project.slug}`} className="project-container">
					<span className="ca-icon">
						<img 
							alt={project.slug}
							src={`/bundles/pllcore/images/projects/${project.slug}.png`} 
							className="img-responsive" 
						/>
					</span>
					<div className="ca-content">
						<h2 className="ca-main"><Translate value={`project.${project.slug}.name`} /></h2>
						<h3 className="ca-sub"><Translate value={`project.${project.slug}.subtitle`} /></h3>
					</div>
				</Link>
			</li>
        ));
	}

	render() {
		const projects = this.renderProjects();

		return (
			<div className="row home-portfolio w3-padding-xlarge">
				<div className="col-xs-12 col-md-5 col-lg-4">
					<Link to="/portfolio" className="button-portfolio">
						<Translate value="home.portfolio.button" />
					</Link>
				</div>
				<div className="col-xs-12 col-md-7 col-lg-8">
					<ul className="ca-menu">
						{projects}
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ projects }) {
    const homepageProjects = FilterPosts(projects, HOMEPAGE);
    return { projects: homepageProjects };
}

export default connect(mapStateToProps)(PortfolioMenu);
