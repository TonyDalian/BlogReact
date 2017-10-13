import React, { Component } from 'react';
import { Translate } from 'react-redux-i18n';

class CategoryTitle extends Component {
	render() {
		const category = this.props.category;
		const className = `
			category-content 
			w3-panel 
			w3-border 
			w3-center 
			w3-round 
			w3-card-4 
			w3-text-white 
			w3-${category.color}
		`;

		return (
			<div className={className}>
				<h1 className="w3-text-shadow w3-wide"><b>
					<Translate value={`category.${category.slug}.title`} />
				</b></h1>
			</div>
		);
	}
}

export default CategoryTitle;
