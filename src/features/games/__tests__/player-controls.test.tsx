import { fireEvent, render, screen } from '@testing-library/react-native';

import { CloseButton } from '../components/close-button';
import { PlayerError } from '../components/player-error';

describe('PlayerError', () => {
  it('is announced as an alert and retries on press', async () => {
    const onRetry = jest.fn();
    await render(<PlayerError onRetry={onRetry} />);

    expect(screen.getByRole('alert', { name: "Couldn't load this game" })).toBeOnTheScreen();
    await fireEvent.press(screen.getByRole('button', { name: 'Try again' }));

    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});

describe('CloseButton', () => {
  it('has an accessible name and a 44pt touch target', async () => {
    const onPress = jest.fn();
    await render(<CloseButton onPress={onPress} />);

    const button = screen.getByRole('button', { name: 'Close game' });
    expect(button).toHaveStyle({ width: 44, height: 44 });

    await fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
