import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '@/constants/theme';

export const ScreenHeader = () => (
  <View style={styles.container}>
    <Text style={styles.eyebrow}>YOUR NEXT FAVOURITE</Text>
    <Text accessibilityRole="header" style={styles.heading}>
      Press play.{'\n'}Stay awhile.
    </Text>
    <Text style={styles.subheading}>A small, hand-picked collection of browser games.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.3,
  },
  heading: {
    color: colors.text,
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: -1.5,
    lineHeight: 38,
  },
  subheading: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
});
