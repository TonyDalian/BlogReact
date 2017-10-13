import { I18n } from 'react-redux-i18n';
import { connect } from 'react-redux';
import React from 'react';
import _ from 'lodash';

import { changeTitle } from '../../action';

import { PostsForCategory } from '../../helpers/project_selector';
import ProjectsList from '../blocks/category/projects_list';
import NotFound from './not_found';
import Loading from './loading';

class Category extends React.Component {
	componentWillMount() {
		this.changeTitle();
	}

	componentWillUpdate() {
		this.changeTitle();
	}

	changeTitle() {
		const category = I18n.t(`category.${this.props.match.params.slug}.title`);
		const title = `${I18n.t('titles.categories')} - ${category}`;
		this.props.changeTitle(title);
	}

	render() {
		if (_.isEmpty(this.props.categories)) return <Loading />;

		const slug = this.props.match.params.slug;
		const current = _.first(_.filter(this.props.categories, category => category.slug === slug));
		if (!current) return <NotFound />;

		const projects = PostsForCategory(this.props.projects, current);

		return (
			<div className="w3-white w3-padding-xxlarge">
				<div className="category category-page">
					<div className="w3-container">
						<ProjectsList category={current} projects={projects} />
					</div>
				</div>
			</div>
		);
	} 
}


function mapStateToProps({ projects, categories }) {
	return { projects, categories };
}

export default connect(mapStateToProps, { changeTitle })(Category);
