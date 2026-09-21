import { render, screen } from '@testing-library/react-native';

import { ScreenHeader } from '../screen-header';

describe('ScreenHeader', () => {
  it('exposes the title as a header for screen readers', async () => {
    await render(<ScreenHeader title="Press play." />);

    expect(screen.getByRole('header', { name: 'Press play.' })).toBeOnTheScreen();
  });

  it('only renders the optional label and subtitle when given', async () => {
    await render(<ScreenHeader title="Title" label="Label" subtitle="Subtitle" />);

    expect(screen.getByText('Label')).toBeOnTheScreen();
    expect(screen.getByText('Subtitle')).toBeOnTheScreen();
  });
});
