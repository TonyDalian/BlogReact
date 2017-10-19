import React, { Component } from 'react';
import { connect } from 'react-redux';

class DansLe1000 extends Component {
	render() {
		const content = this.props.locale === 'fr' ? (
			<div>
				<p className="text-justify">J'ai travaillé en tant que freelance pour réaliser la partie du site dédiée au concours, avec l'interface permettant aux joueurs de répondre aux questions, et une partie administration pour ajouter les jeux, leurs règles, la taille des grilles réponses et le nombre de points attribué à chaque question.</p>
			</div>
		) : (
			<div>
				<p className="text-justify">I worked as a freelance developer on the website's section dedicated to the contest, with an user interface where players can answer the questions, and an administration backoffice for admins to add games, their rules, the size of the answer grids, and the number of points attributed to each question.</p>
			</div>
		);

		return content;
	}
}

function mapStateToProps({ i18n }) {
    const locale = i18n.locale;
    return { locale };
}

export default connect(mapStateToProps)(DansLe1000);
