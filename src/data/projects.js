import RaidTeamGeneratorContent from './content/raid-team-generator';
import PersonalWebsiteContent from './content/personal-website';
import VolumeManagerContent from './content/volume-manager';
import IntellifridgeContent from './content/intellifridge';
import DansLe1000Content from './content/dans-le-1000';
import EHubContent from './content/ehub';

export const projects = [
  {
    id: 37,
    slug: 'raid-team-generator',
    github: 'https://github.com/Kishlin/RaidTeamGenerator',
    music: false,
    dev: false,
    menu: true,
    portfolio: true,
    homepage: true,
    content: RaidTeamGeneratorContent,
    categories: [
      34,
      35
    ]
  },
  {
    id: 38,
    slug: 'ehub',
    github: 'https://github.com/Kishlin/Ehub',
    music: false,
    dev: true,
    menu: true,
    portfolio: true,
    homepage: true,
    content: EHubContent,
    categories: [
      34,
      35
    ]
  },
  {
    id: 39,
    slug: 'personal-website',
    github: 'https://github.com/Kishlin/BlogSymfony',
    music: false,
    dev: false,
    menu: true,
    portfolio: true,
    homepage: true,
    content: PersonalWebsiteContent,
    categories: [
      34,
      35
    ]
  },
  {
    id: 40,
    slug: 'volume-manager',
    github: null,
    music: false,
    dev: false,
    menu: true,
    portfolio: true,
    homepage: true,
    content: VolumeManagerContent,
    categories: [
      31,
      34,
      35
    ]
  },
  {
    id: 41,
    slug: 'intellifridge',
    github: null,
    music: false,
    dev: true,
    menu: true,
    portfolio: true,
    homepage: true,
    content: IntellifridgeContent,
    categories: [
      32,
      35
    ]
  },
  {
    id: 42,
    slug: 'dans-le-1000',
    github: null,
    music: false,
    dev: false,
    menu: true,
    portfolio: true,
    homepage: true,
    content: DansLe1000Content,
    categories: [
      34,
      35
    ]
  }
];
