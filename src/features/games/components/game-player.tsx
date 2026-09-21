import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

import { colors } from '@/constants/theme';

import { useGameLoader } from '../hooks/use-game-loader';
import type { Game } from '../types';
import { PlayerError } from './player-error';
import { PlayerLoading } from './player-loading';

type GamePlayerProps = {
  game: Game;
};

export const GamePlayer = ({ game }: GamePlayerProps) => {
  const { status, webViewKey, webViewHandlers, retry } = useGameLoader(game.title);

  return (
    <View style={styles.container}>
      <WebView
        key={webViewKey}
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
        {...webViewHandlers}
      />
      {status === 'loading' && <PlayerLoading />}
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
});
