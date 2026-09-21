export type GameArtwork = {
  primaryColor: string;
  secondaryColor: string;
  monogram: string;
};

export type Game = {
  id: string;
  title: string;
  category: string;
  description: string;
  playUrl: string;
  artwork: GameArtwork;
};
