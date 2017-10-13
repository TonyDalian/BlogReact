import React from 'react';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';

import { changeTitle } from '../../action';

import ContactBlock from '../blocks/contact/contact_block';
import Presentation from '../blocks/presentation';

class Contact extends React.Component {
	componentWillMount() {
		this.props.changeTitle(I18n.t('titles.contact'));
	}

	render() {
		return (
			<div className="w3-white">
				<div className="home">
					<Presentation />
					<ContactBlock />
				</div>
			</div>
		);
	} 
}

export default connect(null, { changeTitle })(Contact);
