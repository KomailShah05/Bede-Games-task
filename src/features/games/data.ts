import type { Game } from './types';

// play.famobi.com is the embed URL html5games.com uses; it redirects straight to the playable game.
export const GAMES: Game[] = [
  {
    id: 'om-nom-run',
    title: 'Om Nom Run',
    category: 'Runner',
    description:
      'Race through the streets with Om Nom. Dodge obstacles, collect coins and power-ups, and chase a new high score.',
    playUrl: 'https://play.famobi.com/om-nom-run',
    artwork: { primaryColor: '#7065E8', secondaryColor: '#A8ED74', monogram: 'ON' },
  },
  {
    id: 'cannon-balls-3d',
    title: 'Cannon Balls 3D',
    category: 'Arcade',
    description:
      'Aim your cannon and knock every tower down. Use as few balls as possible to earn all three stars.',
    playUrl: 'https://play.famobi.com/cannon-balls-3d',
    artwork: { primaryColor: '#FF885B', secondaryColor: '#FFC76A', monogram: 'CB' },
  },
  {
    id: 'fun-race-3d',
    title: 'Fun Race 3D',
    category: 'Racing',
    description:
      'Tap to run, release to stop. Time your moves past spinning traps and beat your rivals to the finish.',
    playUrl: 'https://play.famobi.com/fun-race-3d',
    artwork: { primaryColor: '#F15C98', secondaryColor: '#FFA66D', monogram: 'FR' },
  },
  {
    id: '3d-free-kick',
    title: '3D Free Kick',
    category: 'Sport',
    description:
      'Swipe to curl the ball over the wall and past the keeper. Hit the targets for bonus points.',
    playUrl: 'https://play.famobi.com/3d-free-kick',
    artwork: { primaryColor: '#2AB4C9', secondaryColor: '#71E0BD', monogram: 'FK' },
  },
  {
    id: 'solitaire-klondike',
    title: 'Solitaire Klondike',
    category: 'Cards',
    description:
      'The classic patience card game. Build four foundation piles from Ace to King to clear the table.',
    playUrl: 'https://play.famobi.com/solitaire-klondike',
    artwork: { primaryColor: '#5D7EEA', secondaryColor: '#AAB9FF', monogram: 'SK' },
  },
];

export const getFeaturedGame = (): Game => GAMES[0];

export const getOtherGames = (featured: Game): Game[] =>
  GAMES.filter((game) => game.id !== featured.id);

export const findGameById = (id: string | undefined): Game | undefined =>
  GAMES.find((game) => game.id === id);
