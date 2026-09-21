import { StyleSheet, useWindowDimensions, View } from 'react-native';

import { spacing } from '@/constants/theme';

import type { Game } from '../types';
import { GameCard } from './game-card';

type GameGridProps = {
  games: Game[];
  onSelectGame: (game: Game) => void;
};

// With large accessibility text sizes, two columns get too cramped to read.
const SINGLE_COLUMN_FONT_SCALE = 1.3;

export const GameGrid = ({ games, onSelectGame }: GameGridProps) => {
  const { fontScale } = useWindowDimensions();
  const itemStyle = fontScale >= SINGLE_COLUMN_FONT_SCALE ? styles.fullWidth : styles.halfWidth;

  return (
    <View style={styles.grid}>
      {games.map((game) => (
        <View key={game.id} style={itemStyle}>
          <GameCard game={game} onPress={onSelectGame} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  halfWidth: {
    flexBasis: '46%',
    flexGrow: 1,
  },
  fullWidth: {
    flexBasis: '100%',
  },
});
