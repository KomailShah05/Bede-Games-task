import { StyleSheet, View } from 'react-native';

import { spacing } from '@/constants/theme';

import type { Game } from '../types';
import { GameCard } from './game-card';

type GameGridProps = {
  games: Game[];
  onSelectGame: (game: Game) => void;
};

export const GameGrid = ({ games, onSelectGame }: GameGridProps) => (
  <View style={styles.grid}>
    {games.map((game) => (
      <GameCard key={game.id} game={game} onPress={onSelectGame} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
});
