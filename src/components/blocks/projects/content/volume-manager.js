import React, { Component } from 'react';
import { connect } from 'react-redux';

class VolumeManager extends Component {
	render() {
		const content = this.props.locale === 'fr' ? (
			<div>
				<p className="text-justify">Ce projet fonctionne en deux parties.</p>
				<p className="text-justify">Une interface web sert de back office pour contrôler le programme. Protégé par un mot de passe, celui-ci permet de régler les différentes règles de surveillance (de combien diminuer le volume, toutes les combien de minutes), les heures où le son doit être complètement coupé la nuit, et les heures libres où le son n'a pas à être contrôlé. Ce réglage se fait pour chaque jour de la semaine, et il laisse la possibilité d'être interrompu les nuits de soirées pour ne pas déranger la fête. Il est également possible de définir une liste d'adresses mail qui doivent être prévenues quand le programme ne tourne plus sur l'ordinateur contrôllé, ou de changer le mot de passe. On trouve aussi une version allégée des logs du programme pour être sûr qu'il fait bien ce qui lui est demandé.</p>
				<p className="text-justify">Enfin, sur l'ordinateur client, tourne un Service Windows. Celui-ci interroge régulièrement l'api web pour connaître la règle à appliquer (plutôt que d'utiliser l'heure actuelle de l'ordinateur, pour éviter qu'un étudiant puisse changer cette dernière et tromper le programme). Il envoie également au serveur les logs de ses actions, et des signes de vie réguliers pour assurer de son fonctionnement.</p>
			</div>
		) : (
			<div>
				<p className="text-justify">This project has two different parts.</p>
				<p className="text-justify">A web interface is used as a back office to manage the program. Protected with a password, this back office's purpose is to modify the working rules (by how many should the volume be lowered, every how many minutes), the hours when the sound should be fully muted at night, and the hours when no action should be taken. These settings are made for each day of the week. It also leaves the possibility to interrupt the program when a party is taking place, to avoid breaking all the fun. There also is a list of e-mail addresses that must be notified when the program is no longer running on the monitored computer. The password can be modified once the page accessed. Finally, users can find a light version of the logs from the program, to make sure everything is working all right.</p>
				<p className="text-justify">Then, then client computer runs a Windows Service. It regularly polls the web API which returns the rules to apply (instead of using the computer's time, to prevent a student from changing the time on the computer and deceive the program). It also sends to the servers the logs of its actions, and regular signs of life to ensure nobody stopped it.</p>
			</div>
		);

		return content;
	}
}

function mapStateToProps({ i18n }) {
    const locale = i18n.locale;
    return { locale };
}

export default connect(mapStateToProps)(VolumeManager);
