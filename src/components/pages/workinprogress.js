import { Translate, I18n } from 'react-redux-i18n';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { changeTitle } from '../../action';
import { FilterPosts, WORK_IN_PROGRESS } from '../../helpers/project_selector';

class WorkInProgress extends Component {
	componentWillMount() {
		this.props.changeTitle(I18n.t('titles.wip'));
	}

	renderProjects() {
		return _.map(this.props.projects, project => (
			<div className="project-article col-xs-12" key={project.id} >
				<div className="w3-card-16 w3-round w3-section">
					<div className="w3-amber w3-container">
						<h1 className="font-color-blue">
							<Translate value={`project.${project.slug}.name`} />
						</h1>
					</div>

					<div className="w3-container w3-section">
					<p className="w3-margin-0">
						<Translate value={`project.${project.slug}.presentation`} dangerousHTML />
					</p>
					</div>
					{
						project.github ?
						<div>
							<Link 
								to={project.github} 
								target="_blank" 
								className="w3-btn w3-btn-block w3-teal w3-ripple" 
								role="button"
							>
								<i
									className="fa fa-github w3-margin-right" 
									aria-hidden="true"
								/>
								<Translate value="project.github.long" />
							</Link>
						</div> :
						''
					}
					<div>
						<Link 
							to={`/projects/${project.slug}`} 
							className="w3-btn w3-btn-block w3-theme w3-ripple" 
							role="button"
						>
							<Translate value="project.details" />
						</Link>
					</div>
				</div> 
			</div>
        ));
	}

	render() {
		const projects = this.renderProjects();

		return (
			<div className="w3-white">
				<div className="wip w3-padding-xxlarge">
					<div className="row">
						{projects}
					</div>
				</div>
			</div>
		);
	} 
}

function mapStateToProps({ projects }) {
    const wipProjects = FilterPosts(projects, WORK_IN_PROGRESS);
    return { projects: wipProjects };
}

export default connect(mapStateToProps, { changeTitle })(WorkInProgress);

