import { Redirect, useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { CloseButton } from '@/features/games/components/close-button';
import { GamePlayer } from '@/features/games/components/game-player';
import { findGameById } from '@/features/games/data';

const GameScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const game = findGameById(id);

  if (!game) {
    return <Redirect href="/" />;
  }

  return (
    <>
      <StatusBar hidden />
      <GamePlayer game={game} />
      <CloseButton onPress={() => router.back()} />
    </>
  );
};

export default GameScreen;
