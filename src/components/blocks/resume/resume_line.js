import React, { Component } from 'react';

class ResumeLine extends Component {
	render() {
		const line = this.props.line;
		const label = line[`label_${this.props.locale}`];
		const value = line[`value_${this.props.locale}`];

		return (
			<div>
				<dt className="w3-text-teal">{ label }</dt><dd>{ value }</dd>
			</div>
		);
	} 
}

export default ResumeLine;
