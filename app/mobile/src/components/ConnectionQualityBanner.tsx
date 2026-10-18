import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppTheme } from '../theme/useAppTheme';

interface Props {
  visible: boolean;
}

export const ConnectionQualityBanner: React.FC<Props> = ({ visible }) => {
  const { colors } = useAppTheme();

  if (!visible) return null;

  return (
    <View
      style={[styles.banner, { backgroundColor: colors.warningBg, borderBottomColor: colors.warningBorder }]}
      accessible
      accessibilityRole="alert"
      accessibilityLabel="Slow connection. The network is available but responding slowly."
    >
      <Text style={[styles.icon, { color: colors.warning }]} accessibilityElementsHidden maxFontSizeMultiplier={2}>Slow</Text>
      <View>
        <Text style={[styles.title, { color: colors.warning }]} maxFontSizeMultiplier={2}>Slow connection</Text>
        <Text style={[styles.subtitle, { color: colors.warning }]} maxFontSizeMultiplier={2}>
          Actions may take longer while the network recovers.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 10,
  },
  icon: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
    opacity: 0.9,
  },
});
