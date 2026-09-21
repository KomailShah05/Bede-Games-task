import { Image } from 'expo-image';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import type { Game } from '../types';

type GameThumbnailProps = {
  game: Game;
  style?: StyleProp<ViewStyle>;
};

// The wrapper owns the size so the image renders the same on iOS and Android.
// Decorative: the card around it already announces the game title.
export const GameThumbnail = ({ game, style }: GameThumbnailProps) => (
  <View
    style={[styles.frame, { backgroundColor: game.color }, style]}
    accessibilityElementsHidden
    importantForAccessibility="no-hide-descendants">
    <Image
      source={{ uri: game.thumbnailUrl }}
      style={StyleSheet.absoluteFill}
      contentFit="cover"
      transition={200}
      cachePolicy="memory-disk"
    />
  </View>
);

const styles = StyleSheet.create({
  frame: {
    overflow: 'hidden',
  },
});
