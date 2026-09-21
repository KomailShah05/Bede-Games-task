import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScreenHeader } from '@/components/screen-header';
import { colors, spacing } from '@/constants/theme';
import { FeaturedGameCard } from '@/features/games/components/featured-game-card';
import { GameGrid } from '@/features/games/components/game-grid';
import { SectionHeader } from '@/features/games/components/section-header';
import { useGameCatalogue } from '@/features/games/hooks/use-game-catalogue';
import { usePlayGame } from '@/features/games/hooks/use-play-game';

const GamesScreen = () => {
  const { featuredGame, otherGames, totalCount } = useGameCatalogue();
  const playGame = usePlayGame();

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <ScreenHeader
          label="Your next favourite"
          title={'Press play.\nStay awhile.'}
          subtitle="A small, hand-picked collection of browser games."
        />
        <FeaturedGameCard game={featuredGame} onPress={playGame} />
        <SectionHeader title="Browse games" caption={`${totalCount} games ready to play`} />
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
