import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, shadow, spacing } from '@/constants/theme';

import type { Game } from '../types';
import { GameArtwork } from './game-artwork';

type FeaturedGameCardProps = {
  game: Game;
  onPress: (game: Game) => void;
};

export const FeaturedGameCard = ({ game, onPress }: FeaturedGameCardProps) => (
  <Pressable
    accessibilityRole="button"
    accessibilityLabel={`Play ${game.title}, pick of the day`}
    accessibilityHint={game.description}
    onPress={() => onPress(game)}
    style={({ pressed }) => [
      styles.card,
      { backgroundColor: game.artwork.primaryColor },
      pressed && styles.pressed,
    ]}>
    <GameArtwork artwork={game.artwork} size="large" style={StyleSheet.absoluteFill} />

    <View style={styles.content}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>PICK OF THE DAY</Text>
      </View>
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description} numberOfLines={3}>
        {game.description}
      </Text>
      <View style={styles.playButton}>
        <Text style={styles.playText}>▶  Play now</Text>
      </View>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  card: {
    ...shadow.card,
    borderRadius: radius.lg,
    overflow: 'hidden',
    padding: spacing.xl,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  content: {
    gap: spacing.sm,
    maxWidth: '68%',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(10, 11, 20, 0.22)',
    borderRadius: radius.pill,
    paddingHorizontal: spacing.sm,
    paddingVertical: 5,
  },
  badgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.7,
  },
  title: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: -1,
  },
  description: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  },
  playButton: {
    alignSelf: 'flex-start',
    marginTop: spacing.sm,
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    borderRadius: radius.pill,
    backgroundColor: colors.white,
  },
  playText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '800',
  },
});
