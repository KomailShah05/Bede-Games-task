import { act, renderHook } from '@testing-library/react-native';
import { AccessibilityInfo } from 'react-native';
import type { WebViewProgressEvent } from 'react-native-webview/lib/WebViewTypes';

import { useGameLoader } from '../hooks/use-game-loader';

const progressEvent = (progress: number) => ({ nativeEvent: { progress } }) as WebViewProgressEvent;

describe('useGameLoader', () => {
  it('stays loading until the page is mostly loaded', async () => {
    const { result } = await renderHook(() => useGameLoader('Om Nom Run'));

    await act(() => result.current.webViewHandlers.onLoadProgress(progressEvent(0.3)));
    expect(result.current.status).toBe('loading');

    await act(() => result.current.webViewHandlers.onLoadProgress(progressEvent(0.7)));
    expect(result.current.status).toBe('ready');
  });

  it('announces to screen readers when the game is ready', async () => {
    const announce = jest.spyOn(AccessibilityInfo, 'announceForAccessibility');
    const { result } = await renderHook(() => useGameLoader('Om Nom Run'));

    await act(() => result.current.webViewHandlers.onLoadEnd());

    expect(announce).toHaveBeenCalledWith('Om Nom Run is ready to play');
  });

  it('shows an error and reloads the WebView on retry', async () => {
    const { result } = await renderHook(() => useGameLoader('Om Nom Run'));
    const firstKey = result.current.webViewKey;

    await act(() => result.current.webViewHandlers.onError());
    expect(result.current.status).toBe('error');

    // A late load-end must not hide the error.
    await act(() => result.current.webViewHandlers.onLoadEnd());
    expect(result.current.status).toBe('error');

    await act(() => result.current.retry());
    expect(result.current.status).toBe('loading');
    expect(result.current.webViewKey).not.toBe(firstKey);
  });
});
