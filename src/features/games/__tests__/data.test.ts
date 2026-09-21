import { findGameById, GAMES, getFeaturedGame, getOtherGames } from '../data';

describe('game data', () => {
  it('finds a game by id and returns undefined for unknown ids', () => {
    expect(findGameById('fun-race-3d')?.title).toBe('Fun Race 3D');
    expect(findGameById('does-not-exist')).toBeUndefined();
    expect(findGameById(undefined)).toBeUndefined();
  });

  it('keeps the featured game out of the browse list', () => {
    const featured = getFeaturedGame();
    const others = getOtherGames(featured);

    expect(others).not.toContainEqual(featured);
    expect(others).toHaveLength(GAMES.length - 1);
  });

  it('gives every game a unique id, a description and https links', () => {
    expect(new Set(GAMES.map((game) => game.id)).size).toBe(GAMES.length);

    GAMES.forEach((game) => {
      expect(game.description.length).toBeGreaterThan(0);
      expect(game.playUrl).toMatch(/^https:\/\//);
      expect(game.thumbnailUrl).toMatch(/^https:\/\//);
    });
  });
});
