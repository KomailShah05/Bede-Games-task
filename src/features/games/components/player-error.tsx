import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing } from '@/constants/theme';

type PlayerErrorProps = {
  onRetry: () => void;
};

export const PlayerError = ({ onRetry }: PlayerErrorProps) => (
  <View style={[StyleSheet.absoluteFill, styles.container]}>
    <Text style={styles.title}>Couldn't load this game</Text>
    <Text style={styles.message}>Check your connection and try again.</Text>
    <Pressable accessibilityRole="button" onPress={onRetry} style={styles.button}>
      <Text style={styles.buttonText}>Try again</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
    padding: spacing.xxl,
    backgroundColor: colors.canvas,
  },
  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '900',
  },
  message: {
    color: colors.textMuted,
    textAlign: 'center',
  },
  button: {
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    borderRadius: radius.pill,
    backgroundColor: colors.accent,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '800',
  },
});
