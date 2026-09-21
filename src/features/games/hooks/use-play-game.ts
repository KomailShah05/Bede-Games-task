import { useRouter } from 'expo-router';

import type { Game } from '../types';

export const usePlayGame = () => {
  const router = useRouter();

  return (game: Game) => router.push({ pathname: '/game/[id]', params: { id: game.id } });
};
