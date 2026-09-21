import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/theme';

type SectionHeaderProps = {
  title: string;
  caption: string;
};

export const SectionHeader = ({ title, caption }: SectionHeaderProps) => (
  <View>
    <Text accessibilityRole="header" style={styles.title}>
      {title}
    </Text>
    <Text style={styles.caption}>{caption}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: -0.7,
  },
  caption: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '600',
    marginTop: 4,
  },
});
