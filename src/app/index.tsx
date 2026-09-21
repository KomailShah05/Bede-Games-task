import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScreenHeader } from '@/components/screen-header';
import { colors, spacing } from '@/constants/theme';
import { FeaturedGameCard } from '@/features/games/components/featured-game-card';
import { GameGrid } from '@/features/games/components/game-grid';
import { SectionHeader } from '@/features/games/components/section-header';
import { GAMES, getFeaturedGame, getOtherGames } from '@/features/games/data';
import type { Game } from '@/features/games/types';

const featuredGame = getFeaturedGame();
const otherGames = getOtherGames(featuredGame);

const GamesScreen = () => {
  const router = useRouter();

  const playGame = (game: Game) =>
    router.push({ pathname: '/game/[id]', params: { id: game.id } });

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <ScreenHeader />
        <FeaturedGameCard game={featuredGame} onPress={playGame} />
        <SectionHeader title="Browse games" caption={`${GAMES.length} games ready to play`} />
        <GameGrid games={otherGames} onSelectGame={playGame} />
        <Text style={styles.attribution}>Games provided by HTML5games.com</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GamesScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.canvas,
  },
  content: {
    gap: spacing.xl,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.xxl,
  },
  attribution: {
    color: colors.textSubtle,
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },
});
