import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, shadow, spacing } from '@/constants/theme';

import type { Game } from '../types';
import { GameThumbnail } from './game-thumbnail';

type FeaturedGameCardProps = {
  game: Game;
  onPress: (game: Game) => void;
};

export const FeaturedGameCard = ({ game, onPress }: FeaturedGameCardProps) => (
  <Pressable
    accessibilityRole="button"
    accessibilityLabel={`Pick of the day: ${game.title}. ${game.category}. ${game.description}`}
    accessibilityHint="Opens the game full screen"
    onPress={() => onPress(game)}
    style={({ pressed }) => [
      styles.card,
      { backgroundColor: game.color },
      pressed && styles.pressed,
    ]}>
    <View style={styles.header}>
      <View style={styles.headerText}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>PICK OF THE DAY</Text>
        </View>
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.category}>{game.category}</Text>
      </View>
      <GameThumbnail game={game} style={styles.thumbnail} />
    </View>

    <Text style={styles.description}>{game.description}</Text>

    <View style={styles.playButton}>
      <Text style={styles.playText}>▶  Play now</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  card: {
    ...shadow.card,
    gap: spacing.md,
    borderRadius: radius.lg,
    padding: spacing.xl,
  },
  pressed: {
    opacity: 0.9,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
  },
  headerText: {
    flex: 1,
    gap: spacing.sm,
  },
  thumbnail: {
    width: 96,
    height: 96,
    borderRadius: radius.md,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.6)',
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
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: -1,
  },
  category: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },
  description: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  },
  playButton: {
    alignSelf: 'flex-start',
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
