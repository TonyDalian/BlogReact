import { fr as MetallicaEnterSandmanCover } from './projects/metallica-enter-sandman-cover';
import { fr as IronMaidenAcesHighCover } from './projects/iron-maiden-aces-high-cover';
import { fr as RaidTeamGenerator } from './projects/raid-team-generator';
import { fr as PersonalWebsite } from './projects/personal-website';
import { fr as VolumeManager } from './projects/volume-manager';
import { fr as Intellifridge } from './projects/intellifridge';
import { fr as DansLe1000 } from './projects/dans-le-1000';
import { fr as Ehub } from './projects/ehub';

export const fr = { 
  redirect: {
    title: 'Si votre navigateur ne vous redirige pas automatiquement,',
    button: 'Cliquez-ici.'
  },
  titles: {
    home: 'Bienvenu',
    contact: 'Contact',
    portfolio: 'Portfolio',
    wip: 'Travaux En Cours',
    resume: 'CV',
    categories: 'Catégorie'
  },
  menu: {
    close: 'Fermer',
    home: 'Accueil',
    projects: 'Projets',
    categories: 'Catégories',
    wip: 'Travaux En Cours',
    portfolio: 'Portfolio',
    resume: 'CV',
    contact: 'Contact'
  },
  header: {
    title: 'Pierre-Louis Legrand',
    subtitle: 'Développeur - Musicien - Etudiant',
    links: {
      home: 'Accueil'
    },
    flag: {
      en: 'Anglais',
      fr: 'Français'
    }
  },
  home: {
    intro: {
      title: 'Bonjour, Je suis Pierre-Louis,',
      legends: [
        'Je peux vous aider.',
        'Me, Myself, and I'
      ],
      texts: [
        'Je travaille en tant que freelance pour des agences, des entreprises, et des ' +
        'particuliers. Je peux m\'impliquer partiellement ou globalement dans des projets ' +
        'de développement web, logiciel, et mobile.',
        'Attentif aux respects des normes et bonnes pratiques, la simplicité l\'ergonomie' +
        ' et l\'intuitivité sont mes priorités. Je peux travailler sur toutes les étapes de ' +
        'votre projet. Je peux également gérer l\'entretien, l\'analyse, et la correction des ' +
        'bugs. Proposer des améliorations et des évolutions.'
      ] 

    },
    portfolio: {
      button: 'Mon Portfolio'
    }
  },
  category: {
    notfound: 'La categorie n\'a pas été trouvée. Erreur d\'url ? :(',
    empty: 'Il n`y a pas encore de projets pour cette categorie. :(',
    software: {
      title: 'Logiciel'
    },
    mobile: {
      title: 'Mobile'
    },
    music: {
      title: 'Musique'
    },
    web: {
      title: 'Web'
    },
    all: {
      title: 'Toutes'
    }
  },
  project: {
    imagelink: 'Voir l\'image en grand.',
    github: {
      long: 'Le voir sur Github'
    },
    details: 'En savoir plus sur ce projet',
    technologies: 'Technologies',
    categories: 'Catégories',
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
      download: 'Téléchargez mon CV',
      experiences: 'Expériences',
      academics: 'Etudes'
    },
    download: {
      help: 'NB : Vous allez télécharger la version Française de mon CV.<br />Si vous le ' +
        'souhaitez, vous pouvez passer à la version Anglaise de cette page grâce au drapeau ' +
        'en haut à droite, pour  télécharger mon CV en anglais.',
      buttons: {
        colored: 'CV en couleurs',
        blackwhite: 'CV en noir et blanc'
      }
    }
  },
  contact: {
    title: 'Vous avez un projet',
    subtitle: 'Parlons-en!',
    legend: {
      name: 'Nom',
      city: 'Ville',
      mail: 'Envoyez moi un email'
    },
    content: {
      name: 'Pierre-Louis Legrand',
      city: 'Lille, France'
    }
  },
  form: {
    label: {
      name: 'Nom',
      subject: 'Sujet',
      email: 'Email',
      message: 'Message'
    },
    message: {
      success: {
        header: 'Succès !',
        content: 'Merci pour votre message, je répondrai dès que possible.'
      },
      error: {
        header: 'Erreur !'
      }
    },
    error: {
      name: {
        blank: 'Vous n\'avez pas entré votre nom.',
        length: 'Votre nom doit faire plus de 3 caractères.'
      },
      subject: {
        blank: 'Vous n\'avez pas spécifié de sujet.',
        length: 'Le sujet doit faire au moins 3 caractères.'
      },
      email: {
        blank: 'Vous n\'avez pas votre adresse mail.',
        invalid: 'Ceci n\'est pas une adresse mail valide.'
      },
      message: {
        blank: 'Vous n\'avez pas entré votre message.',
        length: 'Votre message doit faire au moins 10 caractères.'
      }
    },
    ph: {
      name: 'Qui êtes vous ?',
      subject: 'Pourquoi m\'écrivez-vous ?',
      email: 'Comment vous répondre ?',
      message: 'Qu\'avez-vous à l\'esprit ?'
    },
    sending: 'Patientez quelques instants...'
  }
};
