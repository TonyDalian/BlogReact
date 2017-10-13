import React from 'react';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';

import { changeTitle } from '../../action';

import ContactBlock from '../blocks/contact/contact_block';
import Presentation from '../blocks/presentation';
import PortfolioMenu from '../blocks/portfolio_menu';

class Home extends React.Component {
	componentWillMount() {
		this.props.changeTitle(I18n.t('titles.home'));
	}

	render() {
		return (
			<div className="w3-white">
				<div className="home">
					<Presentation />
					<PortfolioMenu />
					<ContactBlock />
				</div>
			</div>
		);
	} 
}

export default connect(null, { changeTitle })(Home);
