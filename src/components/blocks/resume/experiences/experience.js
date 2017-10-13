import React, { Component } from 'react';

class Experience extends Component {
	render() {
		const experience = this.props.experience;
		const date = experience[`date_${this.props.locale}`];
		const title = experience[`title_${this.props.locale}`];
		const details = experience[`details_${this.props.locale}`];

		return (
			<li>
				<div className="experience">
					<p className="w3-right w3-text-teal w3-slim">{ date }</p>
					<p className="w3-text-theme">{ title }</p>
					<p className="w3-opacity">{ details }</p>
				</div>
			</li>
		);
	} 
}

export default Experience;
