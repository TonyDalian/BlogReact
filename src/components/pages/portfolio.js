import _ from 'lodash';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';
import React, { Component } from 'react';

import { changeTitle } from '../../action';

import { FilterPosts, PostsForCategory, PORTFOLIO } from '../../helpers/project_selector';
import CategoryButtonsList from '../blocks/category/category_buttons_list';
import ProjectsList from '../blocks/portfolio/projects_list';
import Loading from './loading';

class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.state = { active: null };
		this.onCategoryClick = this.onCategoryClick.bind(this);
	}

	componentWillMount() {
		this.props.changeTitle(I18n.t('titles.portfolio'));
	}

	onCategoryClick(category) {
		this.setState({ active: category });
	}

	getActiveCategory() {
		return this.state.active ?
			this.state.active :
			this.props.categories[_.last(_.keys(this.props.categories))];
	}

	render() {
		if (_.isEmpty(this.props.categories)) return <Loading />;
		
		const active = this.getActiveCategory();
		const projects = PostsForCategory(this.props.projects, active);

		return (
			<div className="w3-white">
				<div className="category-page portfolio">
					<div className="categories w3-center">
						<div className="w3-btn-group w3-show-inline-block">
							<CategoryButtonsList 
								categories={this.props.categories} 
								onClick={this.onCategoryClick}
								active={active} 
							/>
						</div>
					</div>
					
					<div className="tab-content w3-container">
						<ProjectsList active={active} projects={projects} />
					</div>
				</div>
			</div>
		);
	} 
}

function mapStateToProps({ projects, categories }) {
	const wipProjects = FilterPosts(projects, PORTFOLIO);
	return { projects: wipProjects, categories };
}

export default connect(mapStateToProps, { changeTitle })(Portfolio);
