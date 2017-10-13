import React, { Component } from 'react';

class Academic extends Component {
	render() {
		const academic = this.props.academic;
		const date = academic[`date_${this.props.locale}`];
		const title = academic[`title_${this.props.locale}`];
		const details = academic[`details_${this.props.locale}`];

		return (
			<li>
				<div className="academic">
					<p className="w3-right w3-text-teal w3-slim">{ date }</p>
					<p className="w3-text-theme">{ title }</p>
					<p className="w3-opacity">{ details }</p>
				</div>
			</li>
		);
	} 
}

export default Academic;
