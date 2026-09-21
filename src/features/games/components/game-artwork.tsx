import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import type { GameArtwork as Artwork } from '../types';

type GameArtworkProps = {
  artwork: Artwork;
  size?: 'small' | 'large';
  style?: StyleProp<ViewStyle>;
};

// Decorative, generated artwork (circles + monogram) so we don't depend on remote images.
export const GameArtwork = ({ artwork, size = 'small', style }: GameArtworkProps) => {
  const large = size === 'large';

  return (
    <View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      pointerEvents="none"
      style={style}>
      <View
        style={[
          styles.orb,
          large ? styles.orbLarge : styles.orbSmall,
          { backgroundColor: artwork.secondaryColor },
        ]}
      />
      <View style={[styles.ring, large ? styles.ringLarge : styles.ringSmall]} />
      <Text style={[styles.monogram, large ? styles.monogramLarge : styles.monogramSmall]}>
        {artwork.monogram}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  orb: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.9,
  },
  orbSmall: { width: 130, height: 130, right: -30, bottom: -50 },
  orbLarge: { width: 200, height: 200, right: -60, top: -40 },
  ring: {
    position: 'absolute',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
  },
  ringSmall: { width: 120, height: 120, right: -50, top: -55 },
  ringLarge: { width: 160, height: 160, right: 20, bottom: -70 },
  monogram: {
    position: 'absolute',
    color: 'rgba(10, 11, 20, 0.72)',
    fontWeight: '900',
  },
  monogramSmall: { left: 12, bottom: 8, fontSize: 32, letterSpacing: -1.5 },
  monogramLarge: { right: 20, bottom: 16, fontSize: 56, letterSpacing: -3 },
});
