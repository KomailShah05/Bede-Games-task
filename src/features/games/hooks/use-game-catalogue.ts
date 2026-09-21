import { GAMES, getFeaturedGame, getOtherGames } from '../data';

// The screens get games through this hook, so the data source can change later
// (e.g. an API) without touching any UI.
export const useGameCatalogue = () => {
  const featuredGame = getFeaturedGame();

  return {
    featuredGame,
    otherGames: getOtherGames(featuredGame),
    totalCount: GAMES.length,
  };
};
