import React from 'react';
import { Translate } from 'react-redux-i18n';

class NotFound extends React.Component {
	render() {
		return (
			<div className="w3-white">
				<div className="home">
					<div className="row w3-padding-xlarge">
						<div className="col-xs-12 text-center">
							<h3><Translate value="category.notfound" /></h3>
						</div>
					</div>
				</div>
			</div>
		);
	} 
}

export default NotFound;
