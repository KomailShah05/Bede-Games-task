import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { colors } from '@/constants/theme';

export const PlayerLoading = () => (
  <View pointerEvents="none" style={[StyleSheet.absoluteFill, styles.container]}>
    <ActivityIndicator size="large" color={colors.white} accessibilityLabel="Loading game" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
});
