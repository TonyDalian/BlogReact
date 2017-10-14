import { en as MetallicaEnterSandmanCover } from './projects/metallica-enter-sandman-cover';
import { en as IronMaidenAcesHighCover } from './projects/iron-maiden-aces-high-cover';
import { en as RaidTeamGenerator } from './projects/raid-team-generator';
import { en as PersonalWebsite } from './projects/personal-website';
import { en as VolumeManager } from './projects/volume-manager';
import { en as Intellifridge } from './projects/intellifridge';
import { en as DansLe1000 } from './projects/dans-le-1000';
import { en as Ehub } from './projects/ehub';

export const en = {	
	redirect: {
		title: 'If your browser doesn\'t redirect you automatically,',
		button: 'Click here.'
	},
	titles: {
		home: 'Welcome',
		contact: 'Contact',
		portfolio: 'Portfolio',
		wip: 'Work In Progress',
		resume: 'Resume',
		categories: 'Category'
	},
	menu: {
		close: 'Close',
		home: 'Home',
		projects: 'Projects',
		categories: 'Categories',
		wip: 'Work In Progress',
		portfolio: 'Portfolio',
		resume: 'Resume',
		contact: 'Contact'
	},
	header: {
		title: 'Pierre-Louis Legrand',
		subtitle: 'Developer - Musician - Student',
		links: {
			home: 'Home'
		},
		flag: {
			en: 'English',
			fr: 'French'
		}
	},
	home: {
		intro: {
			title: 'Hi, I\'m Pierre-Louis',
			legends: [
				'I can help you.',
				'Me, Myself, and I'
			],
			texts: [
				'I work as a freelancer for agencies, companies, or individuals. ' +
				'I can step in partially or globally in web, mobile, or software development projects.',
				'Attentive to compliance with standards and best practices, simplicity usability ' +
				'and intuitiveness are my priorities. I can work on all stages of your project. ' +
				'I can also handle maintenance, analysis, and correction of bugs. ' +
				'Propose enhancements and evolution.'
			] 

		},
		portfolio: {
			button: 'My Portfolio'
		}
	},
	category: {
		notfound: 'The category has not been found. Maybe an url mistake ? :(',
		empty: 'There are no projects for this category yet. :(',
		software: {
			title: 'Software'
		},
		mobile: {
			title: 'Mobile'
		},
		music: {
			title: 'Music'
		},
		web: {
			title: 'Web'
		},
		all: {
			title: 'All'
		}
	},
	project: {
		imagelink: 'See a wider screenshot.',
		github: {
			long: 'See sources on Github'
		},
		details: 'Learn more about the project',
		technologies: 'Technologies',
		categories: 'Categories',
		'raid-team-generator': RaidTeamGenerator,
		'ehub': Ehub,
		'personal-website': PersonalWebsite,
		'volume-manager': VolumeManager,
		'intellifridge': Intellifridge,
		'dans-le-1000': DansLe1000,
		'iron-maiden-aces-high-cover': IronMaidenAcesHighCover,
		'metallica-enter-sandman-cover': MetallicaEnterSandmanCover
	},
	resume: {
		sections: {
			download: 'Download my resume',
			experiences: 'Experiences',
			academics: 'Academics'
		},
		download: {
			help: 'Sidenote : You\'re about to download the English version of my resume.<br />If you ' +
				'want, you can switch to the French version of this page with the flag in the top right ' +
				'corner, to download the French resume.',
			buttons: {
				colored: 'Colored Resume',
				blackwhite: 'Black&White Resume'
			}
		}
	},
	contact: {
		title: 'You have a project',
		subtitle: 'Let\'s talk about it!',
		legend: {
			name: 'Name',
			city: 'City',
			mail: 'Send me an email'
		},
		content: {
			name: 'Pierre-Louis Legrand',
			city: 'Lille, France'
		}
	},
	form: {
		label: {
			name: 'Name',
			subject: 'Subject',
			email: 'Email',
			message: 'Message'
		},
		message: {
			success: {
				header: 'Success!',
				content: 'Thanks for your message. I will reply as soon as possible.'
			},
			error: {
				header: 'Error!'
			}
		},
		error: {
			name: {
				blank: 'Please enter your name.',
				length: 'Your name should be at least 3 chars long.'
			},
			subject: {
				blank: 'Please enter a subject.',
				length: 'Your subject should be at least 3 chars long.'
			},
			email: {
				blank: 'Please enter your email.',
				invalid: 'Please enter a valid email address.'
			},
			message: {
				blank: 'Please enter your message.',
				length: 'Your message should be at least 10 chars long.'
			}
		},
		ph: {
			name: 'Who are you?',
			subject: 'Why are you writing to me?',
			email: 'How will I reply?',
			message: 'What is up your mind?'
		},
		sending: 'Your message is being sent, please wait...'
	}
};
