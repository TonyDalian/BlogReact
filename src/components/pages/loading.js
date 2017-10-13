import React from 'react';


class Loading extends React.Component {
	render() {
		return (
			<div className="loading-wrapper">
				<div className="loading-text">LOADING</div>
				<div className="loading-content" />
			</div>
		);
	} 
}

export default Loading;
