import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '@/constants/theme';

type ScreenHeaderProps = {
  label?: string;
  title: string;
  subtitle?: string;
};

export const ScreenHeader = ({ label, title, subtitle }: ScreenHeaderProps) => (
  <View style={styles.container}>
    {label && <Text style={styles.label}>{label}</Text>}
    <Text accessibilityRole="header" style={styles.title}>
      {title}
    </Text>
    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  label: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.3,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: -1.5,
    lineHeight: 38,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
});
