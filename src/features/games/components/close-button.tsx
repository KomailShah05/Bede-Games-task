import { Pressable, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, spacing } from '@/constants/theme';

type CloseButtonProps = {
  onPress: () => void;
};

export const CloseButton = ({ onPress }: CloseButtonProps) => {
  const { top } = useSafeAreaInsets();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Close game"
      onPress={onPress}
      hitSlop={spacing.sm}
      style={[styles.button, { top: top + spacing.sm }]}>
      <Text style={styles.icon}>✕</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    left: spacing.lg,
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  icon: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
});
