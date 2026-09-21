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

// Game pages keep loading ads and assets long after they are playable,
// so we reveal the game once most of the page has loaded instead of waiting for onLoadEnd.
const READY_PROGRESS = 0.7;

export const GamePlayer = ({ game }: GamePlayerProps) => {
  const [status, setStatus] = useState<Status>('loading');
  const [attempt, setAttempt] = useState(0);

  const markReady = () => setStatus((current) => (current === 'loading' ? 'ready' : current));

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
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
        thirdPartyCookiesEnabled
        setSupportMultipleWindows={false}
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        onLoadProgress={({ nativeEvent }) => {
          if (nativeEvent.progress >= READY_PROGRESS) markReady();
        }}
        onLoadEnd={markReady}
        onError={() => setStatus('error')}
      />
      {status === 'loading' && (
        <View pointerEvents="none" style={[StyleSheet.absoluteFill, styles.loader]}>
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
