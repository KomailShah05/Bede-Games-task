import type { Game } from './types';

// Play and thumbnail URLs are the ones html5games.com itself uses.
const PLAY_BASE_URL = 'https://play.famobi.com';
const THUMBNAIL_BASE_URL = 'https://img.cdn.famobi.com/portal/html5games/images/tmp';

const playUrl = (slug: string) => `${PLAY_BASE_URL}/${slug}/A1000-10`;
const thumbnailUrl = (name: string) => `${THUMBNAIL_BASE_URL}/${name}Teaser.jpg`;

export const GAMES: Game[] = [
  {
    id: 'om-nom-run',
    title: 'Om Nom Run',
    category: 'Runner',
    description:
      'Race through the streets with Om Nom. Dodge obstacles, collect coins and power-ups, and chase a new high score.',
    playUrl: playUrl('om-nom-run'),
    thumbnailUrl: thumbnailUrl('OmNomRun'),
    color: '#7065E8',
  },
  {
    id: 'cannon-balls-3d',
    title: 'Cannon Balls 3D',
    category: 'Arcade',
    description:
      'Aim your cannon and knock every tower down. Use as few balls as possible to earn all three stars.',
    playUrl: playUrl('cannon-balls-3d'),
    thumbnailUrl: thumbnailUrl('CannonBalls3d'),
    color: '#FF885B',
  },
  {
    id: 'fun-race-3d',
    title: 'Fun Race 3D',
    category: 'Racing',
    description:
      'Tap to run, release to stop. Time your moves past spinning traps and beat your rivals to the finish.',
    playUrl: playUrl('fun-race-3d'),
    thumbnailUrl: thumbnailUrl('FunRace3d'),
    color: '#F15C98',
  },
  {
    id: '3d-free-kick',
    title: '3D Free Kick',
    category: 'Sport',
    description:
      'Swipe to curl the ball over the wall and past the keeper. Hit the targets for bonus points.',
    playUrl: playUrl('3d-free-kick'),
    thumbnailUrl: thumbnailUrl('3dFreeKick'),
    color: '#2AB4C9',
  },
  {
    id: 'solitaire-klondike',
    title: 'Solitaire Klondike',
    category: 'Cards',
    description:
      'The classic patience card game. Build four foundation piles from Ace to King to clear the table.',
    playUrl: playUrl('solitaire-klondike'),
    thumbnailUrl: thumbnailUrl('SolitaireKlondike'),
    color: '#5D7EEA',
  },
];

export const getFeaturedGame = (): Game => GAMES[0];

export const getOtherGames = (featured: Game): Game[] =>
  GAMES.filter((game) => game.id !== featured.id);

export const findGameById = (id: string | undefined): Game | undefined =>
  GAMES.find((game) => game.id === id);
