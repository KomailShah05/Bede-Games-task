import { Image } from 'expo-image';
import type { StyleProp, ImageStyle } from 'react-native';

import type { Game } from '../types';

type GameThumbnailProps = {
  game: Game;
  style?: StyleProp<ImageStyle>;
};

// Decorative: the card around it already announces the game title.
export const GameThumbnail = ({ game, style }: GameThumbnailProps) => (
  <Image
    source={game.thumbnailUrl}
    style={[{ backgroundColor: game.color }, style]}
    contentFit="cover"
    transition={200}
    accessible={false}
  />
);
