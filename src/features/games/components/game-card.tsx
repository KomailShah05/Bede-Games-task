import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, shadow, spacing } from '@/constants/theme';

import type { Game } from '../types';
import { GameThumbnail } from './game-thumbnail';

type GameCardProps = {
  game: Game;
  onPress: (game: Game) => void;
};

export const GameCard = ({ game, onPress }: GameCardProps) => (
  <Pressable
    accessibilityRole="button"
    accessibilityLabel={`${game.title}. ${game.category}. ${game.description}`}
    accessibilityHint="Opens the game full screen"
    onPress={() => onPress(game)}
    style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
    <GameThumbnail game={game} style={styles.thumbnail} />
    <View style={styles.content}>
      <Text style={styles.category}>{game.category}</Text>
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  card: {
    ...shadow.card,
    flex: 1,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.md,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.85,
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 1,
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
    fontSize: 13,
    lineHeight: 18,
  },
});
