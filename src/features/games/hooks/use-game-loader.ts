import { useEffect, useState } from 'react';
import { AccessibilityInfo } from 'react-native';
import type { WebViewProgressEvent } from 'react-native-webview/lib/WebViewTypes';

export type LoadStatus = 'loading' | 'ready' | 'error';

// Game pages keep loading ads and assets long after they are playable,
// so the game counts as ready once most of the page has loaded.
const READY_PROGRESS = 0.7;

export const useGameLoader = (title: string) => {
  const [status, setStatus] = useState<LoadStatus>('loading');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (status === 'ready') {
      AccessibilityInfo.announceForAccessibility(`${title} is ready to play`);
    }
  }, [status, title]);

  const markReady = () => setStatus((current) => (current === 'loading' ? 'ready' : current));

  const onLoadProgress = ({ nativeEvent }: WebViewProgressEvent) => {
    if (nativeEvent.progress >= READY_PROGRESS) markReady();
  };

  const onError = () => setStatus('error');

  const retry = () => {
    setStatus('loading');
    setAttempt((count) => count + 1);
  };

  return {
    status,
    // Changing the WebView key remounts it, which reloads the game.
    webViewKey: attempt,
    webViewHandlers: { onLoadProgress, onLoadEnd: markReady, onError },
    retry,
  };
};
