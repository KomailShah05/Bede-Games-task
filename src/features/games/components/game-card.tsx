import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, shadow, spacing } from '@/constants/theme';

import type { Game } from '../types';
import { GameArtwork } from './game-artwork';

type GameCardProps = {
  game: Game;
  onPress: (game: Game) => void;
};

export const GameCard = ({ game, onPress }: GameCardProps) => (
  <Pressable
    accessibilityRole="button"
    accessibilityLabel={`Play ${game.title}, ${game.category}`}
    accessibilityHint={game.description}
    onPress={() => onPress(game)}
    style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
    <GameArtwork
      artwork={game.artwork}
      style={[styles.artwork, { backgroundColor: game.artwork.primaryColor }]}
    />
    <View style={styles.content}>
      <Text style={styles.category}>{game.category}</Text>
      <Text style={styles.title} numberOfLines={1}>
        {game.title}
      </Text>
      <Text style={styles.description} numberOfLines={3}>
        {game.description}
      </Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  card: {
    ...shadow.card,
    flexBasis: '46%',
    flexGrow: 1,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.md,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.985 }],
  },
  artwork: {
    aspectRatio: 1.4,
    overflow: 'hidden',
  },
  content: {
    gap: spacing.xs,
    padding: spacing.md,
  },
  category: {
    color: colors.textSubtle,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  description: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 17,
  },
});
