import React, { Component } from 'react';
import { connect } from 'react-redux';

class EHubContent extends Component {
	render() {
		const content = this.props.locale === 'fr' ? (
			<div>
				<a href="http://e-hub.fr/" className="w3-btn w3-grey w3-round w3-ripple w3-padding-medium w3-margin-bottom w3-text-white" target="_blank" role="button">Accéder au prototype<i className="fa fa-arrow-right w3-margin-left" aria-hidden="true"></i></a>
				<p className="text-justify">L'idée d'E-Hub vient d'une personne forte d'une expérience de près de 2 ans dans une structure eSport en tant que directeur évènementiel, suite aux nombreux problèmes qu'il pouvait rencontrer dans ses tâches comme la prise de contact avec les joueurs, la diffusion de ses évènements, ou la recherche de bénévoles qui ne fonctionnait vraiment qu'en interne. Constatant que ces problèmes étaient récurents dans les autres structures, il a décidé de lancer le projet E-Hub et de compléter son profil plutôt marketting/commercial en s'associant avec moi, développeur fullstack. Une troisième personne participe à l'avancement du projet en tant que consultant pour nous aider dans les prises de décisions.</p>
				<p className="text-justify">Mi-Mars 2017, nous avons pu participer à un Hackaton avec le projet E-Hub, qui nous a permit de rencontrer de nombreux autres entrepreneurs, et de reccueillir de très nombreux feedbacks et avis sur notre projet et sa réalisation. Ce boost à la motivation a aussi été très enrichissant sur la redéfinition de notre stratégie à court comme à long terme.</p>
				<p className="text-justify">Un premier prototype, déjà en ligne, nous a permit de réunir près d'une quarantaine d'amis pour tester et évaluer notre plateforme. Ils ont pu nous remonter de nombreux feedbacks, avis, idées, qui vont beaucoup nous aider à avancer. Cela étant, le projet reste à un état de développement très précoce par rapport à toutes les fonctionnalités que nous souhaitons y implémenter.</p>
				<p className ="text-justify">Créé avec <a className="w3-text-theme" href="http://symfony.com/" title="Voir le site de Symfony." target="_blank">Symfony 3</a> de <a className="w3-text-theme" href="https://sensiolabs.com/" title="Voir le site de SensioLabs." target="_blank">SensioLabs</a>.</p>
			</div>
		) : (
			<div>
				<a href="http://e-hub.fr/" className="w3-btn w3-grey w3-round w3-ripple w3-padding-medium w3-margin-bottom w3-text-white" target="_blank" role="button">Launch prototype<i className="fa fa-arrow-right w3-margin-left" aria-hidden="true"></i></a>
				<p className="text-justify">The idea of ​​E-Hub comes from a person with almost 2 years of experience in an eSport structure as event manager, he had to face many problems in his tasks such as contacting players, broadcasting his events, or searching for volunteers which really worked only internally. Noticing that these problems were recurrent in other structures, he decided to launch the E-Hub project and completed his more market/commercial profile by partnering with me, a fullstack developer. A third person is involved in the project as a consultant to help us make decisions.</p>
				<p className="text-justify">In mid-March 2017, we were able to participate in a Hackaton with the E-Hub project, which allowed us to meet many other entrepreneurs, and to receive a lot of feedback and opinions on our project and its realization. This motivation boost has also been very enriching on the redefinition of our short and long term strategy.</p>
				<p className="text-justify">A first prototype, already online, allowed us to gather nearly forty friends to test and evaluate our platform. They were able to come up with many feedbacks, opinions, ideas, which are going to help us a lot. That said, the project remains at a very early stage of development compared to all the functionalities we want to implement.</p>
				<p className="text-justify">Powered by <a className="w3-text-theme" href="http://symfony.com/" title="Visit the Symfony website." target="_blank">Symfony 3</a> from <a className="w3-text-theme" href="https://sensiolabs.com/" title="Go to SensioLabs." target="_blank">SensioLabs</a>.</p>		
			</div>
		);

		return content;
	}
}

function mapStateToProps({ i18n }) {
    const locale = i18n.locale;
    return { locale };
}

export default connect(mapStateToProps)(EHubContent);
