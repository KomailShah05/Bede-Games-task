export const colors = {
  canvas: '#F4F4F8',
  surface: '#FFFFFF',
  text: '#12131C',
  textMuted: '#4F5264',
  textSubtle: '#63667A',
  border: 'rgba(18, 19, 28, 0.08)',
  accent: '#5B4BDB',
  white: '#FFFFFF',
  black: '#000000',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 32,
} as const;

export const radius = {
  md: 18,
  lg: 24,
  pill: 999,
} as const;

export const shadow = {
  card: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },
} as const;
