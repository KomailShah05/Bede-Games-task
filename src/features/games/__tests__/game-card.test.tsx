import { fireEvent, render, screen } from '@testing-library/react-native';

import { FeaturedGameCard } from '../components/featured-game-card';
import { GameCard } from '../components/game-card';
import { GAMES } from '../data';

const game = GAMES[1];

describe('GameCard', () => {
  it('is one accessible button that describes the game', async () => {
    await render(<GameCard game={game} onPress={jest.fn()} />);

    const button = screen.getByRole('button', { name: new RegExp(game.title) });
    expect(button).toHaveAccessibleName(`${game.title}. ${game.category}. ${game.description}`);
    expect(button).toHaveProp('accessibilityHint', 'Opens the game full screen');
  });

  it('shows the full description without truncating it', async () => {
    await render(<GameCard game={game} onPress={jest.fn()} />);

    expect(screen.getByText(game.description)).not.toHaveProp('numberOfLines');
  });

  it('passes the game to onPress', async () => {
    const onPress = jest.fn();
    await render(<GameCard game={game} onPress={onPress} />);

    await fireEvent.press(screen.getByRole('button'));

    expect(onPress).toHaveBeenCalledWith(game);
  });
});

describe('FeaturedGameCard', () => {
  it('announces itself as the pick of the day and plays on press', async () => {
    const onPress = jest.fn();
    await render(<FeaturedGameCard game={GAMES[0]} onPress={onPress} />);

    await fireEvent.press(screen.getByRole('button', { name: /^Pick of the day: Om Nom Run/ }));

    expect(onPress).toHaveBeenCalledWith(GAMES[0]);
  });
});
