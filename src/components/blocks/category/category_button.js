import React, { Component } from 'react';

class CategoryButton extends Component {
	onButtonClick() {
		this.props.onClick(this.props.category);
	}

	render() {
		const category = this.props.category;
		let className = `category-btn w3-btn w3-ripple w3-jumbo w3-text-white w3-${category.color}`;
		if (this.props.active) className += ' in active';

		return (
			<button 
				className={className} 
				onClick={this.onButtonClick.bind(this)}
			>
				<i className={`fa ${category.icon}`} aria-hidden="true" />
			</button>
		);
	}
}

export default CategoryButton;
