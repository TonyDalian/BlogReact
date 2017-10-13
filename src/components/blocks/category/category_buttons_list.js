import React, { Component } from 'react';
import _ from 'lodash';

import CategoryButton from './category_button';

class CategoryButtonsList extends Component {
	render() {
		const active = this.props.active;
		const categories = this.props.categories;

		const buttons = _.map(categories, category => {
			if (active.slug === category.slug) {
				return (
					<CategoryButton 
						active 
						key={category.id} 
						category={category} 
						onClick={this.props.onClick} 
					/>
				);
			} 

			return (
				<CategoryButton 
					key={category.id} 
					category={category} 
					onClick={this.props.onClick} 
				/>
			);
		});

		return (
			<div>{buttons}</div>
		);
	}
}

export default CategoryButtonsList;
