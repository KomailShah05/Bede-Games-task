import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

import { colors } from '@/constants/theme';

import type { Game } from '../types';
import { PlayerError } from './player-error';

type GamePlayerProps = {
  game: Game;
};

type Status = 'loading' | 'ready' | 'error';

export const GamePlayer = ({ game }: GamePlayerProps) => {
  const [status, setStatus] = useState<Status>('loading');
  const [attempt, setAttempt] = useState(0);

  const retry = () => {
    setStatus('loading');
    setAttempt((count) => count + 1);
  };

  return (
    <View style={styles.container}>
      <WebView
        key={attempt}
        source={{ uri: game.playUrl }}
        accessibilityLabel={`${game.title} game`}
        style={styles.webView}
        javaScriptEnabled
        domStorageEnabled
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        onLoadEnd={() => setStatus((current) => (current === 'error' ? current : 'ready'))}
        onError={() => setStatus('error')}
      />
      {status === 'loading' && (
        <View style={[StyleSheet.absoluteFill, styles.loader]}>
          <ActivityIndicator size="large" color={colors.white} accessibilityLabel="Loading game" />
        </View>
      )}
      {status === 'error' && <PlayerError onRetry={retry} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  webView: {
    flex: 1,
    backgroundColor: colors.black,
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
});
